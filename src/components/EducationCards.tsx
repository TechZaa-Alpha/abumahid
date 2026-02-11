import { Card } from "@/components/ui/card";
import { BadgeCheck, Calendar, Code2, GraduationCap } from "lucide-react";
import React from "react";

const education: {
  id: string;
  institution: string;
  degree: string;
  field_of_study: string | null;
  start_date: string;
  end_date: string | null;
  description: string | null;
  display_order: number | null;
  gpa?: string | null;
  year_label?: string | null; // "2022" / "Running"
}[] = [
  {
    id: "ssc",
    institution: "Dangirhat School and College",
    degree: "SSC",
    field_of_study: "Science",
    start_date: "2020",
    end_date: "2022",
    description: null,
    display_order: 1,
    gpa: "4.96",
    year_label: "2022",
  },
  {
    id: "diploma",
    institution: "Kurigram Polytechnic Institute",
    degree: "Diploma in Engineering",
    field_of_study: "Computer Science Technology",
    start_date: "2022",
    end_date: null,
    description: null,
    display_order: 2,
    gpa: "-",
    year_label: "Running",
  },
];

function Pill({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/5 hover:bg-primary/10 transition-colors">
      <span className="text-primary">{icon}</span>
      <span className="text-sm text-muted-foreground">
        <span className="opacity-80">{title}:</span>{" "}
        <span className="text-primary font-medium">{value}</span>
      </span>
    </div>
  );
}

const EducationCards = () => {
  const items = [...education].sort(
    (a, b) => (a.display_order ?? 999) - (b.display_order ?? 999),
  );

  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold mb-8 animate-fade-in">
        <span className="text-primary">#</span>education
      </h2>

      <div className="grid lg:grid-cols-2 gap-8">
        {items.map((edu) => (
          <Card
            key={edu.id}
            className="
              group relative overflow-hidden
              bg-card/30 border-2 border-primary/25
              hover:border-primary/70
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]
            "
          >
            {/* Neon gradient overlay */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-primary/15 via-transparent to-transparent opacity-80" />

            {/* Soft animated glow dot-pattern vibe */}
            <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-primary/10 blur-3xl opacity-60 group-hover:opacity-90 transition-opacity" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl opacity-40 group-hover:opacity-70 transition-opacity" />

            {/* Mac dots */}
            <div className="absolute left-6 top-6 flex gap-2 z-10">
              <span className="w-3 h-3 rounded-full bg-red-500/90" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/90" />
              <span className="w-3 h-3 rounded-full bg-green-500/90" />
            </div>

            <div className="p-8 pt-14 relative z-10">
              {/* Featured label */}
              <p className="text-xs tracking-widest text-emerald-400/90 mb-4 uppercase">
                Featured Education
              </p>

              {/* Title row */}
              <div className="flex items-start gap-3 mb-3">
                <div className="mt-1 text-primary">
                  <GraduationCap className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </div>

                <div className="min-w-0">
                  <h3 className="text-2xl font-bold text-primary truncate">
                    {edu.degree}
                  </h3>
                  <p className="text-muted-foreground mt-1 truncate">
                    {edu.institution}
                  </p>
                </div>
              </div>

              {/* Year */}
              <div className="flex items-center gap-2 text-muted-foreground mb-6">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">
                  Year:{" "}
                  <span className="text-primary font-medium">
                    {edu.year_label ??
                      (edu.end_date ? edu.end_date : "Running")}
                  </span>
                </span>
              </div>

              {/* Pills */}
              <div className="flex flex-wrap gap-3">
                <Pill
                  icon={<BadgeCheck className="w-4 h-4" />}
                  title="GPA"
                  value={edu.gpa ?? "-"}
                />
                <Pill
                  icon={<Code2 className="w-4 h-4" />}
                  title="Department"
                  value={edu.field_of_study ?? "-"}
                />
              </div>

              {/* Optional description */}
              {edu.description ? (
                <p className="text-sm text-muted-foreground mt-5 leading-relaxed">
                  {edu.description}
                </p>
              ) : null}
            </div>

            {/* Bottom neon line */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-40 group-hover:opacity-80 transition-opacity" />
          </Card>
        ))}
      </div>
    </section>
  );
};

export default EducationCards;
