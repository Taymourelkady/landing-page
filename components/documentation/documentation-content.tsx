"use client"

import { useState, useEffect } from "react"
import { ChevronRight, ChevronDown, Book, Shield, Database, Zap, Code, Layers, MessageSquare, Brain, Box, FileText, BarChart3, Archive, Search, Lock } from "lucide-react"
import { SharedHeader } from "@/components/ui/shared-header"
import { navItems, dropdownItems, aboutDropdownItems, sharedHeaderOptions } from "@/components/ui/header-config"
import { LandingFooter } from "@/components/landing/landing-footer"

interface Section {
  id: string
  title: string
  icon?: React.ComponentType<{ className?: string }>
  subsections?: Section[]
}

const sections: Section[] = [
  {
    id: "getting-started",
    title: "Getting Started",
    icon: Book,
    subsections: [
      { id: "introduction", title: "Introduction" },
      { id: "installation", title: "Installation" },
      { id: "setup", title: "Setup" },
    ]
  },
  {
    id: "key-modules",
    title: "Key Modules",
    icon: Layers,
    subsections: [
      { id: "agents", title: "Agents" },
      { id: "models", title: "Models" },
      { id: "tools", title: "Tools" },
      { id: "societies", title: "Societies" },
      { id: "workforce", title: "Workforce" },
      { id: "datagen", title: "Datagen" },
      { id: "interpreters", title: "Interpreters" },
      { id: "runtimes", title: "Runtimes" },
      { id: "messages", title: "Messages" },
      { id: "knowledge-layer", title: "Knowledge Layer" },
      { id: "prompts", title: "Prompts" },
      { id: "metrics", title: "Metrics" },
      { id: "loaders", title: "Loaders" },
      { id: "storage", title: "Storage" },
      { id: "embeddings", title: "Embeddings" },
      { id: "retrievers", title: "Retrievers" },
    ]
  },
  {
    id: "security",
    title: "Security",
    icon: Shield,
    subsections: []
  },
  {
    id: "data-integration",
    title: "Data Integration",
    icon: Database,
    subsections: [
      { id: "data-connection-string", title: "Data Connection String" },
      { id: "vpn-tunnel", title: "VPN Tunnel" },
      { id: "on-premise", title: "On-Premise" },
    ]
  }
]

export function DocumentationContent() {
  const [activeSection, setActiveSection] = useState("introduction")
  const [expandedSections, setExpandedSections] = useState<string[]>(["getting-started", "key-modules", "data-integration"])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      const allIds: string[] = []
      sections.forEach(section => {
        if (section.subsections && section.subsections.length > 0) {
          section.subsections.forEach(sub => allIds.push(sub.id))
        } else {
          allIds.push(section.id)
        }
      })

      for (const id of allIds) {
        const element = document.getElementById(id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const header = document.querySelector("header")
      const headerHeight = header ? header.getBoundingClientRect().height : 0
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - headerHeight - 20

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    )
  }

  return (
    <div className="min-h-screen bg-[#0c1420] text-white">
      <SharedHeader
        navItems={navItems}
        dropdownItems={dropdownItems}
        aboutDropdownItems={aboutDropdownItems}
        {...sharedHeaderOptions}
      />

      <div className="container py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-72 flex-shrink-0">
            <div className="lg:fixed lg:top-24 lg:w-72 lg:h-[calc(100vh-6rem)] lg:overflow-y-auto bg-[#101827] rounded-lg border border-gray-700 p-4">
              <h2 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                <Book className="w-5 h-5 text-treeo-500" />
                Documentation
              </h2>
              <nav className="space-y-1">
                {sections.map((section) => {
                  const SectionIcon = section.icon
                  const isExpanded = expandedSections.includes(section.id)
                  const hasSubsections = section.subsections && section.subsections.length > 0

                  return (
                    <div key={section.id}>
                      {hasSubsections ? (
                        <>
                          <button
                            onClick={() => toggleSection(section.id)}
                            className="flex items-center justify-between w-full px-3 py-2 text-left rounded-md text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                          >
                            <span className="flex items-center gap-2 font-medium">
                              {SectionIcon && <SectionIcon className="w-4 h-4" />}
                              {section.title}
                            </span>
                            {isExpanded ? (
                              <ChevronDown className="w-4 h-4" />
                            ) : (
                              <ChevronRight className="w-4 h-4" />
                            )}
                          </button>
                          {isExpanded && (
                            <div className="ml-6 mt-1 space-y-1 border-l border-gray-700 pl-3">
                              {section.subsections.map((subsection) => (
                                <button
                                  key={subsection.id}
                                  onClick={() => scrollToSection(subsection.id)}
                                  className={`flex items-center w-full px-3 py-1.5 text-left text-sm rounded-md transition-colors ${
                                    activeSection === subsection.id
                                      ? "text-treeo-500 font-medium bg-treeo-500/10"
                                      : "text-gray-400 hover:bg-gray-800 hover:text-white"
                                  }`}
                                >
                                  {subsection.title}
                                </button>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <button
                          onClick={() => scrollToSection(section.id)}
                          className={`flex items-center gap-2 w-full px-3 py-2 text-left rounded-md transition-colors ${
                            activeSection === section.id
                              ? "bg-treeo-500/20 text-treeo-500 font-medium"
                              : "text-gray-300 hover:bg-gray-800 hover:text-white"
                          }`}
                        >
                          {SectionIcon && <SectionIcon className="w-4 h-4" />}
                          {section.title}
                        </button>
                      )}
                    </div>
                  )
                })}
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 max-w-4xl">
            <div className="bg-[#101827] rounded-lg border border-gray-700 p-8">
              <h1 className="text-4xl font-bold mb-4 text-white">Treeo Documentation</h1>
              <p className="text-xl text-gray-300 mb-8">
                Complete technical reference for building with Treeo
              </p>

              {/* Getting Started */}
              <section id="introduction" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-4 text-white border-b border-gray-700 pb-2">Introduction</h2>
                <p className="mb-4 text-gray-300">
                  Welcome to Treeo, an advanced analytics platform that transforms how teams interact with data.
                  Treeo combines natural language processing with powerful data infrastructure to enable anyone
                  in your organization to explore data, build dashboards, and share insights.
                </p>
                <p className="mb-4 text-gray-300">
                  Built on a foundation of AI agents and semantic understanding, Treeo maintains consistency
                  across your metrics while providing the flexibility to explore data in intuitive ways.
                </p>
                <div className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-4 mt-4">
                  <h4 className="font-semibold text-treeo-500 mb-2">Key Features</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Natural language queries powered by advanced LLMs</li>
                    <li>• Unified metrics dictionary for consistent definitions</li>
                    <li>• Multi-agent architecture for complex data tasks</li>
                    <li>• Real-time collaboration and sharing</li>
                    <li>• Enterprise-grade security and governance</li>
                  </ul>
                </div>
              </section>

              <section id="installation" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-4 text-white border-b border-gray-700 pb-2">Installation</h2>
                <p className="mb-4 text-gray-300">
                  Treeo is available as a cloud service and can be installed on-premise for enterprise customers.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-white">Cloud Installation</h3>
                <p className="mb-4 text-gray-300">
                  Sign up at <code className="bg-[#1A1F2E] px-2 py-1 rounded text-treeo-400">app.treeo.ai</code> and
                  create your first workspace in minutes.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-white">Python SDK</h3>
                <div className="bg-[#0d1117] border border-gray-700 rounded-lg p-4 mb-4">
                  <pre className="text-sm text-gray-300">
                    <code>{`pip install treeo-sdk

# or using poetry
poetry add treeo-sdk`}</code>
                  </pre>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-white">Node.js SDK</h3>
                <div className="bg-[#0d1117] border border-gray-700 rounded-lg p-4">
                  <pre className="text-sm text-gray-300">
                    <code>{`npm install @treeo/sdk

# or using yarn
yarn add @treeo/sdk`}</code>
                  </pre>
                </div>
              </section>

              <section id="setup" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-4 text-white border-b border-gray-700 pb-2">Setup</h2>

                <h3 className="text-xl font-semibold mb-3 text-white">Quick Start</h3>
                <ol className="space-y-3 text-gray-300 mb-6">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-treeo-500 text-white flex items-center justify-center text-sm font-bold">1</span>
                    <span>Create an account and workspace</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-treeo-500 text-white flex items-center justify-center text-sm font-bold">2</span>
                    <span>Connect your first data source</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-treeo-500 text-white flex items-center justify-center text-sm font-bold">3</span>
                    <span>Define your core metrics in the metrics dictionary</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-treeo-500 text-white flex items-center justify-center text-sm font-bold">4</span>
                    <span>Start querying with natural language or SQL</span>
                  </li>
                </ol>

                <h3 className="text-xl font-semibold mb-3 text-white">Configuration</h3>
                <p className="mb-4 text-gray-300">Initialize the SDK with your API key:</p>
                <div className="bg-[#0d1117] border border-gray-700 rounded-lg p-4">
                  <pre className="text-sm text-gray-300">
                    <code>{`from treeo import Treeo

client = Treeo(
    api_key="your_api_key",
    workspace_id="your_workspace_id"
)

# Run your first query
result = client.query("What was our revenue last quarter?")`}</code>
                  </pre>
                </div>
              </section>

              {/* Key Modules */}
              <section id="agents" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-4 text-white border-b border-gray-700 pb-2">Agents</h2>
                <p className="mb-4 text-gray-300">
                  Agents are autonomous components that handle specific data tasks. Each agent has specialized
                  capabilities and can collaborate with other agents to solve complex problems.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-white">Query Agent</h3>
                <p className="mb-4 text-gray-300">
                  Translates natural language into SQL queries and executes them against your data sources.
                </p>
                <div className="bg-[#0d1117] border border-gray-700 rounded-lg p-4 mb-4">
                  <pre className="text-sm text-gray-300">
                    <code>{`from treeo.agents import QueryAgent

agent = QueryAgent(
    model="gpt-4",
    data_sources=["postgres_main"],
    metrics_dictionary=metrics
)

response = agent.execute("Show me top 10 customers by revenue")`}</code>
                  </pre>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-white">Analysis Agent</h3>
                <p className="mb-4 text-gray-300">
                  Performs statistical analysis and identifies patterns in your data.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-white">Visualization Agent</h3>
                <p className="mb-4 text-gray-300">
                  Automatically selects and generates appropriate visualizations based on query results.
                </p>
              </section>

              <section id="models" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-4 text-white border-b border-gray-700 pb-2">Models</h2>
                <p className="mb-4 text-gray-300">
                  Treeo supports multiple LLM providers and allows you to configure model preferences for different tasks.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-white">Supported Models</h3>
                <ul className="space-y-2 text-gray-300 mb-4">
                  <li>• OpenAI GPT-4 and GPT-3.5</li>
                  <li>• Anthropic Claude 3 (Opus, Sonnet, Haiku)</li>
                  <li>• Google PaLM 2</li>
                  <li>• Open-source models via Ollama</li>
                </ul>

                <div className="bg-[#0d1117] border border-gray-700 rounded-lg p-4">
                  <pre className="text-sm text-gray-300">
                    <code>{`from treeo.models import ModelConfig

config = ModelConfig(
    default_model="gpt-4",
    query_model="claude-3-sonnet",
    analysis_model="gpt-4",
    temperature=0.1
)`}</code>
                  </pre>
                </div>
              </section>

              <section id="tools" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-4 text-white border-b border-gray-700 pb-2">Tools</h2>
                <p className="mb-4 text-gray-300">
                  Tools extend agent capabilities by providing access to external systems and specialized functions.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-white">Built-in Tools</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-treeo-500 mb-2">SQLExecutor</h4>
                    <p className="text-sm text-gray-300">Execute SQL queries against connected databases</p>
                  </div>
                  <div className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-treeo-500 mb-2">DataProfiler</h4>
                    <p className="text-sm text-gray-300">Analyze data quality and statistics</p>
                  </div>
                  <div className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-treeo-500 mb-2">MetricsCalculator</h4>
                    <p className="text-sm text-gray-300">Compute metrics from the dictionary</p>
                  </div>
                  <div className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-treeo-500 mb-2">ChartGenerator</h4>
                    <p className="text-sm text-gray-300">Create visualizations from data</p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-white">Custom Tools</h3>
                <div className="bg-[#0d1117] border border-gray-700 rounded-lg p-4">
                  <pre className="text-sm text-gray-300">
                    <code>{`from treeo.tools import Tool

class CustomDataTool(Tool):
    name = "custom_data_tool"
    description = "Fetches data from custom API"

    def execute(self, params: dict):
        # Your custom logic
        return results`}</code>
                  </pre>
                </div>
              </section>

              <section id="societies" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-4 text-white border-b border-gray-700 pb-2">Societies</h2>
                <p className="mb-4 text-gray-300">
                  Societies are groups of agents that work together on complex tasks, with defined roles and
                  communication patterns.
                </p>
                <div className="bg-[#0d1117] border border-gray-700 rounded-lg p-4">
                  <pre className="text-sm text-gray-300">
                    <code>{`from treeo.societies import AnalyticsSociety

society = AnalyticsSociety(
    agents=[query_agent, analysis_agent, viz_agent],
    coordinator=coordinator_agent
)

result = society.solve("Analyze sales trends and create a dashboard")`}</code>
                  </pre>
                </div>
              </section>

              <section id="workforce" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-4 text-white border-b border-gray-700 pb-2">Workforce</h2>
                <p className="mb-4 text-gray-300">
                  Workforce manages the lifecycle and scheduling of agents, ensuring efficient resource utilization.
                </p>
                <div className="bg-[#0d1117] border border-gray-700 rounded-lg p-4">
                  <pre className="text-sm text-gray-300">
                    <code>{`from treeo.workforce import WorkforceManager

manager = WorkforceManager(
    max_concurrent_agents=5,
    queue_strategy="priority"
)

manager.schedule(agent, task, priority=1)`}</code>
                  </pre>
                </div>
              </section>

              <section id="datagen" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-4 text-white border-b border-gray-700 pb-2">Datagen</h2>
                <p className="mb-4 text-gray-300">
                  Generate synthetic data for testing, development, and training purposes while maintaining
                  statistical properties of production data.
                </p>
                <div className="bg-[#0d1117] border border-gray-700 rounded-lg p-4">
                  <pre className="text-sm text-gray-300">
                    <code>{`from treeo.datagen import SyntheticDataGenerator

generator = SyntheticDataGenerator(
    schema=schema,
    row_count=10000
)

synthetic_data = generator.generate()`}</code>
                  </pre>
                </div>
              </section>

              <section id="interpreters" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-4 text-white border-b border-gray-700 pb-2">Interpreters</h2>
                <p className="mb-4 text-gray-300">
                  Interpreters translate natural language into structured queries and commands, handling context
                  and disambiguation.
                </p>
                <div className="bg-[#0d1117] border border-gray-700 rounded-lg p-4">
                  <pre className="text-sm text-gray-300">
                    <code>{`from treeo.interpreters import NLInterpreter

interpreter = NLInterpreter(
    metrics_dictionary=metrics,
    schema_context=schema
)

parsed = interpreter.parse("revenue last quarter by region")`}</code>
                  </pre>
                </div>
              </section>

              <section id="runtimes" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-4 text-white border-b border-gray-700 pb-2">Runtimes</h2>
                <p className="mb-4 text-gray-300">
                  Runtimes provide isolated execution environments for queries and computations with resource limits
                  and timeout controls.
                </p>
                <div className="bg-[#0d1117] border border-gray-700 rounded-lg p-4">
                  <pre className="text-sm text-gray-300">
                    <code>{`from treeo.runtimes import QueryRuntime

runtime = QueryRuntime(
    timeout=30,
    memory_limit="2GB",
    isolation="strict"
)

result = runtime.execute(query)`}</code>
                  </pre>
                </div>
              </section>

              <section id="messages" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-4 text-white border-b border-gray-700 pb-2">Messages</h2>
                <p className="mb-4 text-gray-300">
                  Messages enable communication between agents, users, and systems with support for rich content
                  and attachments.
                </p>
                <div className="bg-[#0d1117] border border-gray-700 rounded-lg p-4">
                  <pre className="text-sm text-gray-300">
                    <code>{`from treeo.messages import Message, MessageType

message = Message(
    type=MessageType.QUERY,
    content="Show revenue trends",
    sender="user_123",
    metadata={"context": "dashboard"}
)`}</code>
                  </pre>
                </div>
              </section>

              <section id="knowledge-layer" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-4 text-white border-b border-gray-700 pb-2">Knowledge Layer</h2>
                <p className="mb-4 text-gray-300">
                  The Knowledge Layer stores semantic understanding of your data, metrics definitions, business logic,
                  and organizational context.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-white">Metrics Dictionary</h3>
                <p className="mb-4 text-gray-300">
                  Central repository for metric definitions ensuring consistency across the organization.
                </p>
                <div className="bg-[#0d1117] border border-gray-700 rounded-lg p-4 mb-4">
                  <pre className="text-sm text-gray-300">
                    <code>{`from treeo.knowledge import MetricDefinition

revenue_metric = MetricDefinition(
    name="monthly_revenue",
    description="Total revenue for a given month",
    formula="SUM(transactions.amount)",
    filters=["transaction_type = 'sale'"],
    unit="USD"
)`}</code>
                  </pre>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-white">Semantic Layer</h3>
                <p className="mb-4 text-gray-300">
                  Maps business concepts to underlying data structures for intuitive querying.
                </p>
              </section>

              <section id="prompts" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-4 text-white border-b border-gray-700 pb-2">Prompts</h2>
                <p className="mb-4 text-gray-300">
                  Customize and optimize prompts for different agents and use cases to improve accuracy and relevance.
                </p>
                <div className="bg-[#0d1117] border border-gray-700 rounded-lg p-4">
                  <pre className="text-sm text-gray-300">
                    <code>{`from treeo.prompts import PromptTemplate

query_prompt = PromptTemplate(
    name="sql_generation",
    template="""Given the schema and metrics:
{schema}
{metrics}

Generate SQL for: {user_query}""",
    variables=["schema", "metrics", "user_query"]
)`}</code>
                  </pre>
                </div>
              </section>

              <section id="metrics" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-4 text-white border-b border-gray-700 pb-2">Metrics</h2>
                <p className="mb-4 text-gray-300">
                  Define, calculate, and track business metrics with automatic dependency resolution and caching.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-white">Metric Types</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-treeo-500 mb-2">Simple Metrics</h4>
                    <p className="text-sm text-gray-300">Direct aggregations like SUM, COUNT, AVG</p>
                  </div>
                  <div className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-treeo-500 mb-2">Derived Metrics</h4>
                    <p className="text-sm text-gray-300">Calculated from other metrics</p>
                  </div>
                  <div className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-treeo-500 mb-2">Composite Metrics</h4>
                    <p className="text-sm text-gray-300">Complex calculations across sources</p>
                  </div>
                </div>
              </section>

              <section id="loaders" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-4 text-white border-b border-gray-700 pb-2">Loaders</h2>
                <p className="mb-4 text-gray-300">
                  Load data from various sources into Treeo for analysis and storage.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-white">Supported Sources</h3>
                <ul className="space-y-2 text-gray-300 mb-4">
                  <li>• CSV, JSON, Parquet files</li>
                  <li>• Database connectors (PostgreSQL, MySQL, etc.)</li>
                  <li>• Cloud storage (S3, GCS, Azure Blob)</li>
                  <li>• APIs and webhooks</li>
                  <li>• Streaming sources (Kafka, Kinesis)</li>
                </ul>

                <div className="bg-[#0d1117] border border-gray-700 rounded-lg p-4">
                  <pre className="text-sm text-gray-300">
                    <code>{`from treeo.loaders import CSVLoader, DatabaseLoader

csv_loader = CSVLoader(file_path="data.csv")
db_loader = DatabaseLoader(connection_string="postgresql://...")`}</code>
                  </pre>
                </div>
              </section>

              <section id="storage" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-4 text-white border-b border-gray-700 pb-2">Storage</h2>
                <p className="mb-4 text-gray-300">
                  Flexible storage backends for caching, results, and metadata with support for multiple storage types.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-white">Storage Types</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-treeo-500 mb-2">Object Storage</h4>
                    <p className="text-sm text-gray-300">For large datasets and query results</p>
                  </div>
                  <div className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-treeo-500 mb-2">Vector Storage</h4>
                    <p className="text-sm text-gray-300">For embeddings and semantic search</p>
                  </div>
                  <div className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-treeo-500 mb-2">Graph Storage</h4>
                    <p className="text-sm text-gray-300">For relationships and lineage</p>
                  </div>
                  <div className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-treeo-500 mb-2">Cache Storage</h4>
                    <p className="text-sm text-gray-300">For fast query result retrieval</p>
                  </div>
                </div>
              </section>

              <section id="embeddings" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-4 text-white border-b border-gray-700 pb-2">Embeddings</h2>
                <p className="mb-4 text-gray-300">
                  Generate and manage embeddings for semantic search, similarity matching, and natural language understanding.
                </p>
                <div className="bg-[#0d1117] border border-gray-700 rounded-lg p-4">
                  <pre className="text-sm text-gray-300">
                    <code>{`from treeo.embeddings import EmbeddingGenerator

generator = EmbeddingGenerator(
    model="text-embedding-ada-002",
    dimension=1536
)

embeddings = generator.generate(texts)`}</code>
                  </pre>
                </div>
              </section>

              <section id="retrievers" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-4 text-white border-b border-gray-700 pb-2">Retrievers</h2>
                <p className="mb-4 text-gray-300">
                  Retrieve relevant context, examples, and documentation to enhance agent capabilities and accuracy.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-white">Retriever Types</h3>
                <ul className="space-y-2 text-gray-300 mb-4">
                  <li>• Semantic retriever (using embeddings)</li>
                  <li>• Keyword retriever (BM25)</li>
                  <li>• Hybrid retriever (combining multiple strategies)</li>
                  <li>• Example-based retriever (few-shot learning)</li>
                </ul>

                <div className="bg-[#0d1117] border border-gray-700 rounded-lg p-4">
                  <pre className="text-sm text-gray-300">
                    <code>{`from treeo.retrievers import SemanticRetriever

retriever = SemanticRetriever(
    index="metrics_index",
    top_k=5
)

results = retriever.retrieve("customer lifetime value")`}</code>
                  </pre>
                </div>
              </section>

              {/* Security */}
              <section id="security" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-4 text-white border-b border-gray-700 pb-2">Security</h2>
                <p className="mb-4 text-gray-300">
                  Treeo implements enterprise-grade security across all layers of the platform.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-white">Authentication & Authorization</h3>
                <ul className="space-y-2 text-gray-300 mb-4">
                  <li>• SSO integration (SAML, OAuth 2.0)</li>
                  <li>• Role-based access control (RBAC)</li>
                  <li>• Row-level security for data access</li>
                  <li>• API key management</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-white">Data Security</h3>
                <ul className="space-y-2 text-gray-300 mb-4">
                  <li>• Encryption at rest (AES-256)</li>
                  <li>• Encryption in transit (TLS 1.3)</li>
                  <li>• Credential encryption and rotation</li>
                  <li>• Audit logging for all operations</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-white">Compliance</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-4 text-center">
                    <Shield className="w-8 h-8 text-treeo-500 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-white">SOC 2 Type II</p>
                  </div>
                  <div className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-4 text-center">
                    <Shield className="w-8 h-8 text-treeo-500 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-white">GDPR</p>
                  </div>
                  <div className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-4 text-center">
                    <Shield className="w-8 h-8 text-treeo-500 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-white">HIPAA</p>
                  </div>
                  <div className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-4 text-center">
                    <Shield className="w-8 h-8 text-treeo-500 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-white">ISO 27001</p>
                  </div>
                </div>
              </section>

              {/* Data Integration */}
              <section id="data-connection-string" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-4 text-white border-b border-gray-700 pb-2">Data Connection String</h2>
                <p className="mb-4 text-gray-300">
                  Connect to your data sources using standard connection strings with support for all major databases.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-white">PostgreSQL</h3>
                <div className="bg-[#0d1117] border border-gray-700 rounded-lg p-4 mb-4">
                  <pre className="text-sm text-gray-300">
                    <code>{`postgresql://username:password@host:5432/database?sslmode=require`}</code>
                  </pre>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-white">MySQL</h3>
                <div className="bg-[#0d1117] border border-gray-700 rounded-lg p-4 mb-4">
                  <pre className="text-sm text-gray-300">
                    <code>{`mysql://username:password@host:3306/database`}</code>
                  </pre>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-white">Snowflake</h3>
                <div className="bg-[#0d1117] border border-gray-700 rounded-lg p-4 mb-4">
                  <pre className="text-sm text-gray-300">
                    <code>{`snowflake://username:password@account.snowflakecomputing.com/database/schema?warehouse=compute_wh`}</code>
                  </pre>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-white">BigQuery</h3>
                <div className="bg-[#0d1117] border border-gray-700 rounded-lg p-4">
                  <pre className="text-sm text-gray-300">
                    <code>{`bigquery://project-id/dataset?credentials_path=/path/to/credentials.json`}</code>
                  </pre>
                </div>
              </section>

              <section id="vpn-tunnel" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-4 text-white border-b border-gray-700 pb-2">VPN Tunnel</h2>
                <p className="mb-4 text-gray-300">
                  Establish secure VPN tunnels for accessing databases behind corporate firewalls.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-white">Setup Steps</h3>
                <ol className="space-y-3 text-gray-300 mb-6">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-treeo-500 text-white flex items-center justify-center text-sm font-bold">1</span>
                    <span>Generate VPN configuration from Treeo dashboard</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-treeo-500 text-white flex items-center justify-center text-sm font-bold">2</span>
                    <span>Configure your VPN server with provided credentials</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-treeo-500 text-white flex items-center justify-center text-sm font-bold">3</span>
                    <span>Whitelist Treeo IP addresses in your firewall</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-treeo-500 text-white flex items-center justify-center text-sm font-bold">4</span>
                    <span>Test connection from Treeo dashboard</span>
                  </li>
                </ol>

                <div className="bg-[#1A1F2E] border border-treeo-500/30 rounded-lg p-4">
                  <h4 className="font-semibold text-treeo-500 mb-2">Supported VPN Protocols</h4>
                  <ul className="space-y-1 text-gray-300">
                    <li>• IPsec/IKEv2</li>
                    <li>• OpenVPN</li>
                    <li>• WireGuard</li>
                  </ul>
                </div>
              </section>

              <section id="on-premise" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-4 text-white border-b border-gray-700 pb-2">On-Premise</h2>
                <p className="mb-4 text-gray-300">
                  Deploy Treeo within your own infrastructure for maximum control and data residency compliance.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-white">System Requirements</h3>
                <div className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-white mb-3">Minimum Requirements</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• CPU: 8 cores</li>
                    <li>• RAM: 32 GB</li>
                    <li>• Storage: 500 GB SSD</li>
                    <li>• Kubernetes 1.24+</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-white">Installation</h3>
                <div className="bg-[#0d1117] border border-gray-700 rounded-lg p-4 mb-4">
                  <pre className="text-sm text-gray-300">
                    <code>{`# Add Treeo Helm repository
helm repo add treeo https://charts.treeo.ai

# Install Treeo
helm install treeo treeo/treeo \\
  --set license.key=YOUR_LICENSE_KEY \\
  --set storage.type=s3 \\
  --set storage.s3.bucket=your-bucket`}</code>
                  </pre>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-white">Architecture Components</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-treeo-500 mb-2">API Gateway</h4>
                    <p className="text-sm text-gray-300">Handles all external requests and authentication</p>
                  </div>
                  <div className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-treeo-500 mb-2">Query Engine</h4>
                    <p className="text-sm text-gray-300">Executes queries and manages connections</p>
                  </div>
                  <div className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-treeo-500 mb-2">Agent Runtime</h4>
                    <p className="text-sm text-gray-300">Runs AI agents and model inference</p>
                  </div>
                  <div className="bg-[#1A1F2E] border border-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-treeo-500 mb-2">Metadata Store</h4>
                    <p className="text-sm text-gray-300">Stores metrics, schemas, and configurations</p>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
      <LandingFooter />
    </div>
  )
}
