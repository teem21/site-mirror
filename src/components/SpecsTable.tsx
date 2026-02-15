const specs = [
{ label: "Material", value: "Carbon fiber fuselage" },
{ label: "Model", value: "Shadow Striker 3200" },
{ label: "Wingspan / Fuselage Length", value: "3.20 m / 1.20 m" },
{ label: "Folded Dimensions", value: "1.64 × 1.2 × 0.3 m" },
{ label: "Empty / Takeoff Weight", value: "15 / 30.5 kg" },
{ label: "Max Payload", value: "15 kg" },
{ label: "Max Takeoff Weight", value: "45.5 kg" },
{ label: "Endurance", value: "4 hrs (with Multi-Spectrum Camera Gimbal)" },
{ label: "Loiter / Max Speed", value: "80 / 150 km/h" },
{ label: "Range", value: "320 km" },
{ label: "Power System", value: "Electric" },
{ label: "Max Climb Rate", value: "6 m/s" },
{ label: "Takeoff Elevation", value: "4,000 m" }];


const SpecsTable = () => {
  return (
    <section id="specs" className="bg-card py-20 px-6 lg:px-16 shadow-none">
      <div className="mx-auto max-w-4xl">
        <p className="mb-2 font-heading text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          Technical Data
        </p>
        <h2 className="mb-10 font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          SPECIFICATIONS
        </h2>

        <div className="overflow-hidden border border-border">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-secondary">
                <th className="px-6 py-3 text-left font-heading text-xs font-semibold uppercase tracking-wider text-foreground">
                  Parameters
                </th>
                <th className="px-6 py-3 text-left font-heading text-xs font-semibold uppercase tracking-wider text-foreground">
                  Details
                </th>
              </tr>
            </thead>
            <tbody>
              {specs.map((s, i) =>
              <tr
                key={i}
                className="border-b border-border last:border-b-0 transition-colors hover:bg-secondary/50">

                  <td className="px-6 py-3.5 text-sm font-medium text-muted-foreground">
                    {s.label}
                  </td>
                  <td className="px-6 py-3.5 text-sm text-foreground">
                    {s.value}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>);

};

export default SpecsTable;