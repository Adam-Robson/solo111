
export default function FeatureCard({ features }) {
  return features.map((feature) => {
    return (
      <li key={feature.name}>
        <feature.icon className="icon" />
      </li>
    );
  });
}
