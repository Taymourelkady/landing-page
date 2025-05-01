import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AboutTeam() {
  const team = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      bio: "Former data scientist with 10+ years experience solving data consistency problems at scale.",
      avatar: "AJ",
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      bio: "Machine learning expert specializing in natural language processing and data visualization.",
      avatar: "SC",
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Product",
      bio: "Product leader focused on creating intuitive interfaces for complex data problems.",
      avatar: "MR",
    },
    {
      name: "Priya Patel",
      role: "Head of Customer Success",
      bio: "Dedicated to ensuring customers extract maximum value from their data with Treeo.",
      avatar: "PP",
    },
  ]

  return (
    <section className="py-20 bg-[#101827]">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Team</h2>
          <p className="text-xl text-gray-300">
            We're a team of data scientists, engineers, and product designers passionate about making data accessible to
            everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div key={member.name} className="bg-[#1A1F2E] p-6 rounded-lg border border-gray-700 text-center">
              <Avatar className="h-24 w-24 mx-auto mb-4">
                <AvatarImage src={`/placeholder.svg?height=96&width=96&text=${member.avatar}`} />
                <AvatarFallback className="bg-emerald-500/20 text-emerald-500 text-xl">{member.avatar}</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold mb-1 text-white">{member.name}</h3>
              <p className="text-emerald-500 mb-3">{member.role}</p>
              <p className="text-gray-300">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
