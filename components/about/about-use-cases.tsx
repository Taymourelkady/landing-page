export function AboutUseCases() {
  const chatModeUsers = [
    {
      number: "1",
      role: "Product Manager",
      description: "Chats for funnel data, adds charts to shared dashboards.",
    },
    {
      number: "2",
      role: "Operations Lead",
      description: "Creates dashboards, filters data, shares with team.",
    },
    {
      number: "3",
      role: "Sales Manager",
      description: "Queries churn by tier, compares quarters, updates dashboards.",
    },
    {
      number: "4",
      role: "Executive",
      description: "Reviews insights via dashboards and sets strategic direction.",
    },
  ]

  const scientistModeUsers = [
    {
      number: "1",
      role: "Data Engineer",
      description: "Uses Data Profiler to improve data schema.",
    },
    {
      number: "2",
      role: "Data Analyst",
      description: "Explores data, builds metrics, and creates reports.",
    },
    {
      number: "3",
      role: "Developer",
      description: "Integrates analytics into applications and automations.",
    },
  ]

  return (
    <section id="use-cases" className="py-20 bg-[#0c1420] scroll-mt-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Use Cases</h2>
          <p className="text-xl text-gray-300">Treeo adapts to different roles and needs across your organization.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Chat Mode */}
          <div className="bg-[#101827] rounded-lg p-6 border border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-center text-white">Chat Mode</h3>
            <div className="space-y-6">
              {chatModeUsers.map((user) => (
                <div key={user.role} className="flex gap-4">
                  <div className="flex-shrink-0 h-12 w-12 bg-[#1A1F2E] rounded-lg flex items-center justify-center text-xl font-bold text-treeo-500">
                    {user.number}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-treeo-500">{user.role}</h4>
                    <p className="text-gray-300">{user.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scientist Mode */}
          <div className="bg-[#101827] rounded-lg p-6 border border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-center text-white">Scientist Mode</h3>
            <div className="space-y-6">
              {scientistModeUsers.map((user) => (
                <div key={user.role} className="flex gap-4">
                  <div className="flex-shrink-0 h-12 w-12 bg-[#1A1F2E] rounded-lg flex items-center justify-center text-xl font-bold text-treeo-500">
                    {user.number}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-treeo-500">{user.role}</h4>
                    <p className="text-gray-300">{user.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center text-white">How Different Teams Benefit</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#1A1F2E] p-6 rounded-lg border border-gray-700">
              <h4 className="text-xl font-semibold mb-3 text-treeo-500">Business Teams</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Access data without SQL knowledge</li>
                <li>• Create visualizations with simple commands</li>
                <li>• Share insights across departments</li>
                <li>• Make data-driven decisions faster</li>
              </ul>
            </div>

            <div className="bg-[#1A1F2E] p-6 rounded-lg border border-gray-700">
              <h4 className="text-xl font-semibold mb-3 text-treeo-500">Data Teams</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Establish consistent metric definitions</li>
                <li>• Reduce time spent on ad-hoc requests</li>
                <li>• Improve data quality and governance</li>
                <li>• Focus on high-value analysis</li>
              </ul>
            </div>

            <div className="bg-[#1A1F2E] p-6 rounded-lg border border-gray-700">
              <h4 className="text-xl font-semibold mb-3 text-treeo-500">Leadership</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Get consistent reporting across teams</li>
                <li>• Reduce decision-making bottlenecks</li>
                <li>• Improve data literacy organization-wide</li>
                <li>• Accelerate strategic initiatives</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
