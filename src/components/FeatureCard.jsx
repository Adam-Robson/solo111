/**
 * This component is displayed at the bottom
 * of each project card; the cards appear by
 * hovering over a project on the projects page.
 */
export default function FeatureCard({ features }) {
  return features.map((feature) => {
    return (
      <li key={feature.name}>
        <feature.icon className="icon" />
      </li>
    );
  });
}
