import { redirect } from "next/navigation";
import Link from "next/link";
import { getUnifiedSession } from "@/lib/auth/unified";
import { mockAppointments } from "@/lib/healthie/client";
import { getCustomerOrders } from "@/lib/shopify/admin";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Calendar, 
  Package, 
  ShoppingBag, 
  CreditCard, 
  Settings, 
  Star,
  Clock,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Truck
} from "lucide-react";

export default async function AccountPage() {
  const session = await getUnifiedSession();

  if (!session.isAuthenticated) {
    redirect("/login");
  }

  // Get user info from either system
  const userName = session.healthie.patient?.first_name || 
                   session.shopify.customer?.firstName || 
                   "there";

  // Get appointments from Healthie (mock for now)
  const upcomingAppointments = session.healthie.isAuthenticated 
    ? mockAppointments.filter((apt) => apt.status === "Scheduled")
    : [];
  const pastAppointments = session.healthie.isAuthenticated
    ? mockAppointments.filter((apt) => apt.status === "Completed")
    : [];

  // Get orders from Shopify
  const shopifyOrders = session.shopify.accessToken
    ? await getCustomerOrders(session.shopify.accessToken)
    : [];

  const quickLinks = [
    {
      title: "Book Appointment",
      description: "Schedule your next treatment",
      icon: Calendar,
      href: "/book",
      color: "bg-gold/10 text-gold",
      requiresHealthie: true,
    },
    {
      title: "My Packages",
      description: "View prepaid treatments",
      icon: Package,
      href: "/account/packages",
      color: "bg-blue-50 text-blue-600",
      requiresHealthie: true,
    },
    {
      title: "Shop Products",
      description: "Skincare and supplements",
      icon: ShoppingBag,
      href: "/shop",
      color: "bg-green-50 text-green-600",
      requiresHealthie: false,
    },
    {
      title: "Payment Methods",
      description: "Manage cards and financing",
      icon: CreditCard,
      href: "/account/payment",
      color: "bg-purple-50 text-purple-600",
      requiresHealthie: false,
    },
  ];

  return (
    <div className="min-h-screen bg-cream pt-24 pb-16">
      <div className="container-healinque">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-display-sm font-serif text-navy-deep">
              Welcome back, {userName}!
            </h1>
            <p className="text-taupe mt-1">
              Manage your appointments, orders, and account settings
            </p>
          </div>
          <Link href="/account/settings" className="mt-4 md:mt-0">
            <Button variant="outline" size="sm">
              <Settings className="mr-2 h-4 w-4" />
              Account Settings
            </Button>
          </Link>
        </div>

        {/* Connection Status */}
        <div className="bg-white rounded-lg p-4 mb-8 flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            {session.healthie.isAuthenticated ? (
              <CheckCircle className="h-5 w-5 text-green-500" />
            ) : (
              <AlertCircle className="h-5 w-5 text-amber-500" />
            )}
            <span className="text-sm">
              <span className="font-medium">Patient Portal:</span>{" "}
              {session.healthie.isAuthenticated ? "Connected" : "Not connected"}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {session.shopify.isAuthenticated ? (
              <CheckCircle className="h-5 w-5 text-green-500" />
            ) : (
              <AlertCircle className="h-5 w-5 text-amber-500" />
            )}
            <span className="text-sm">
              <span className="font-medium">Shop:</span>{" "}
              {session.shopify.isAuthenticated ? "Connected" : "Not connected"}
            </span>
          </div>
          <div className="text-sm text-taupe ml-auto">
            Logged in as: <span className="font-medium">{session.email}</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {quickLinks.map((link) => (
            <Link key={link.title} href={link.href}>
              <Card className="h-full hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <div className={`w-10 h-10 rounded-lg ${link.color} flex items-center justify-center mb-3`}>
                    <link.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-medium text-navy-deep">{link.title}</h3>
                  <p className="text-sm text-taupe">{link.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - Left 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upcoming Appointments */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-gold" />
                    Upcoming Appointments
                  </CardTitle>
                  <CardDescription>Your scheduled treatments</CardDescription>
                </div>
                <Link href="/book">
                  <Button size="sm">Book New</Button>
                </Link>
              </CardHeader>
              <CardContent>
                {!session.healthie.isAuthenticated ? (
                  <div className="text-center py-8">
                    <AlertCircle className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                    <p className="text-taupe mb-4">Connect to patient portal to view appointments</p>
                    <Link href="/login">
                      <Button variant="outline">Connect Portal</Button>
                    </Link>
                  </div>
                ) : upcomingAppointments.length > 0 ? (
                  <div className="space-y-4">
                    {upcomingAppointments.map((apt) => (
                      <div
                        key={apt.id}
                        className="flex items-center justify-between p-4 bg-cream rounded-lg"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center">
                            <Calendar className="h-6 w-6 text-gold" />
                          </div>
                          <div>
                            <h4 className="font-medium text-navy-deep">
                              {apt.appointment_type.name}
                            </h4>
                            <p className="text-sm text-taupe">
                              {apt.date} at {apt.start_time}
                            </p>
                            <p className="text-sm text-taupe">
                              with {apt.provider.full_name}
                            </p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Manage
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Calendar className="h-12 w-12 text-cream-dark mx-auto mb-4" />
                    <p className="text-taupe mb-4">No upcoming appointments</p>
                    <Link href="/book">
                      <Button>Book Your Next Treatment</Button>
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Recent Orders */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingBag className="h-5 w-5 text-gold" />
                    Recent Orders
                  </CardTitle>
                  <CardDescription>Your product purchases</CardDescription>
                </div>
                <Link href="/shop">
                  <Button size="sm" variant="outline">Shop Now</Button>
                </Link>
              </CardHeader>
              <CardContent>
                {!session.shopify.isAuthenticated ? (
                  <div className="text-center py-8">
                    <AlertCircle className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                    <p className="text-taupe mb-4">Connect to shop to view orders</p>
                    <Link href="/login">
                      <Button variant="outline">Connect Shop</Button>
                    </Link>
                  </div>
                ) : shopifyOrders.length > 0 ? (
                  <div className="space-y-4">
                    {shopifyOrders.slice(0, 5).map((order) => (
                      <div
                        key={order.id}
                        className="flex items-center justify-between p-4 bg-cream rounded-lg"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                            {order.fulfillmentStatus === "FULFILLED" ? (
                              <CheckCircle className="h-6 w-6 text-green-600" />
                            ) : (
                              <Truck className="h-6 w-6 text-amber-600" />
                            )}
                          </div>
                          <div>
                            <h4 className="font-medium text-navy-deep">
                              Order #{order.orderNumber}
                            </h4>
                            <p className="text-sm text-taupe">
                              {new Date(order.processedAt).toLocaleDateString()} • ${order.totalPrice}
                            </p>
                            <p className="text-sm text-taupe">
                              {order.lineItems.map(i => i.title).join(", ").slice(0, 50)}
                              {order.lineItems.map(i => i.title).join(", ").length > 50 ? "..." : ""}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                            order.fulfillmentStatus === "FULFILLED" 
                              ? "bg-green-100 text-green-700" 
                              : "bg-amber-100 text-amber-700"
                          }`}>
                            {order.fulfillmentStatus === "FULFILLED" ? "Delivered" : "In Transit"}
                          </span>
                        </div>
                      </div>
                    ))}
                    {shopifyOrders.length > 5 && (
                      <Link href="/account/orders" className="block text-center">
                        <Button variant="link" className="text-gold">
                          View All Orders ({shopifyOrders.length})
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <ShoppingBag className="h-12 w-12 text-cream-dark mx-auto mb-4" />
                    <p className="text-taupe mb-4">No orders yet</p>
                    <Link href="/shop">
                      <Button>Start Shopping</Button>
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Treatment History */}
            {session.healthie.isAuthenticated && pastAppointments.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-gold" />
                    Treatment History
                  </CardTitle>
                  <CardDescription>Your completed appointments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {pastAppointments.map((apt) => (
                      <div
                        key={apt.id}
                        className="flex items-center justify-between py-3 border-b border-cream-dark last:border-0"
                      >
                        <div className="flex items-center gap-3">
                          <Clock className="h-5 w-5 text-taupe" />
                          <div>
                            <p className="font-medium text-navy-deep">
                              {apt.appointment_type.name}
                            </p>
                            <p className="text-sm text-taupe">{apt.date}</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          View Details
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar - Right column */}
          <div className="space-y-6">
            {/* Membership Status */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-gold" />
                  Membership
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-taupe mb-4">
                  Join our membership program for exclusive benefits and savings.
                </p>
                <Link href="/memberships">
                  <Button className="w-full" variant="outline">
                    View Memberships
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Account Info */}
            <Card>
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm text-taupe">Email</p>
                  <p className="font-medium text-navy-deep">{session.email}</p>
                </div>
                {session.healthie.patient && (
                  <>
                    <div>
                      <p className="text-sm text-taupe">Name</p>
                      <p className="font-medium text-navy-deep">
                        {session.healthie.patient.first_name} {session.healthie.patient.last_name}
                      </p>
                    </div>
                    {session.healthie.patient.phone_number && (
                      <div>
                        <p className="text-sm text-taupe">Phone</p>
                        <p className="font-medium text-navy-deep">
                          {session.healthie.patient.phone_number}
                        </p>
                      </div>
                    )}
                  </>
                )}
                <Link href="/account/settings">
                  <Button className="w-full mt-4" variant="outline" size="sm">
                    Edit Profile
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card className="bg-navy-deep text-white">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl text-gold mb-2">
                  Need Assistance?
                </h3>
                <p className="text-cream/80 text-sm mb-4">
                  Our team is here to help with any questions about your treatments or account.
                </p>
                <a href="tel:+18583377999">
                  <Button className="w-full bg-gold hover:bg-gold-dark text-white">
                    Call (858) 337-7999
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
