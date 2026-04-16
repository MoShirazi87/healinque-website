export function Disclaimer({ className = "" }: { className?: string }) {
  return (
    <p className={`text-xs text-taupe italic ${className}`}>
      Results may vary. Individual results are not guaranteed. All treatments performed or directly supervised by Dr. Azi Shirazi, MD. Treatment recommendations are determined during your consultation.
    </p>
  );
}
