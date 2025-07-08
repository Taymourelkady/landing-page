export function AboutProcess() {
  const steps = [
    {
      number: "01",
      title: "Connect Your Data",
      description: "Integrate with your existing databases, data warehouses, and analytics tools.",
    },
    {
      number: "02",
      title: "Define Your Metrics",
      description: "Create a unified metrics dictionary that ensures consistency across your organization.",
    },
    {
      number: "03",
      title: "Ask Questions",
      description: "Use natural language to query your data, create visualizations, and build dashboards.",
    },
    {
      number: "04",
      title: "Share Insights",
      description: "Collaborate with your team using shared dashboards and reports.",
    },
  ]

  return (
    <section className="py-20 bg-[#101827]">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">How Treeo Works</h2>
          <p className="text-xl text-gray-300">
            Our platform simplifies data access while ensuring consistency across your organization.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
<<<<<<< HEAD
          <div className="absolute left-[50%] top-0 bottom-0 w-0.5 bg-treeo-500/30 hidden md:block" />
=======
          <div className="absolute left-[50%] top-0 bottom-0 w-0.5 bg-emerald-500/30 hidden md:block" />
>>>>>>> 40857736cfc8826d837473da2ec33c9cf282ff9c

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div key={index} className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Step number with circle */}
                <div
<<<<<<< HEAD
                  className={`hidden md:flex absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-treeo-500 text-white items-center justify-center font-bold text-lg`}
=======
                  className={`hidden md:flex absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-emerald-500 text-white items-center justify-center font-bold text-lg`}
>>>>>>> 40857736cfc8826d837473da2ec33c9cf282ff9c
                >
                  {step.number}
                </div>

                {/* Content */}
                <div className={`${index % 2 === 0 ? "md:text-right md:pr-16" : "md:order-2 md:text-left md:pl-16"}`}>
                  <div className="flex md:hidden items-center gap-4 mb-4">
<<<<<<< HEAD
                    <div className="flex h-10 w-10 rounded-full bg-treeo-500 text-white items-center justify-center font-bold">
=======
                    <div className="flex h-10 w-10 rounded-full bg-emerald-500 text-white items-center justify-center font-bold">
>>>>>>> 40857736cfc8826d837473da2ec33c9cf282ff9c
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                  </div>
                  <div className="hidden md:block">
                    <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
                  </div>
                  <p className="text-gray-300 text-lg">{step.description}</p>
                </div>

                {/* Illustration */}
                <div
                  className={`${index % 2 === 0 ? "md:order-2" : ""} bg-[#1A1F2E] rounded-lg p-6 border border-gray-700 shadow-lg h-64 flex items-center justify-center`}
                >
                  <div className="text-center">
<<<<<<< HEAD
                    <div className="text-treeo-500 text-6xl font-bold mb-2">{step.number}</div>
=======
                    <div className="text-emerald-500 text-6xl font-bold mb-2">{step.number}</div>
>>>>>>> 40857736cfc8826d837473da2ec33c9cf282ff9c
                    <p className="text-gray-400">Illustration for {step.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
