import missionImage from "@/assets/uav-mission.jpg";

const applications = [
  {
    title: "Intelligent Autonomous Operations",
    desc: "Seamlessly integrates AI with advanced drone technology for automatic target acquisition, intelligent tracking, and data collection without human intervention.",
  },
  {
    title: "Centralized Ground Control",
    desc: "Integrated interface for effortless flight planning, payload operation, gimbal control, real-time video transmission, and autonomous tracking with one click.",
  },
  {
    title: "Hive Base Stations",
    desc: "AI-powered hive base stations enable long-endurance autonomous missions for aerial mapping, 3D modeling, and large-area infrastructure inspection.",
  },
  {
    title: "Rapid Tactical Deployment",
    desc: "Folds into a compact case for single-operator transport. Launches in minutes with no support crew — a rapid-response asset for dynamic environments.",
  },
];

const ApplicationsSection = () => {
  return (
    <section className="bg-background py-20 px-6 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 font-heading text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          Main Features
        </p>
        <h2 className="mb-12 font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          INTELLIGENT UAV SYSTEMS
        </h2>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            {applications.map((app, i) => (
              <div key={i} className="border-l-2 border-primary/30 pl-5 transition-all hover:border-primary">
                <h3 className="mb-1.5 font-heading text-lg font-bold text-foreground">
                  {app.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {app.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="overflow-hidden border border-border">
            <img
              src={missionImage}
              alt="UAV fleet on reconnaissance mission"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
