export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Pramod S S
          </h1>
          <p className="text-2xl text-gray-300 mb-2">DevOps Engineer & Full-Stack Developer</p>
          <p className="text-gray-400 mb-8">Bengaluru, India</p>
          <div className="flex justify-center gap-4 mb-8">
            <a href="mailto:parmiprami9591@gmail.com" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition">Contact Me</a>
            <a href="https://github.com/Pramu55" target="_blank" className="px-6 py-3 border border-cyan-500 hover:bg-cyan-500/10 rounded-lg transition">GitHub</a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-8 text-center">Technical Skills</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">Cloud & Infrastructure</h3>
            <p className="text-gray-300">AWS (EC2, S3, IAM, VPC), Terraform, Docker, Kubernetes, Helm</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">CI/CD & Automation</h3>
            <p className="text-gray-300">GitHub Actions, GitLab CI/CD, Jenkins, ArgoCD, Shell Scripting</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">Development</h3>
            <p className="text-gray-300">Python, Java, Node.js, React, Next.js, TypeScript, REST APIs</p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-8 text-center">Experience</h2>
        <div className="space-y-8">
          <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur">
            <h3 className="text-2xl font-semibold text-cyan-400">DevOps Deployment Engineer</h3>
            <p className="text-gray-400 mb-2">Shramic Networks | Feb 2026 - Present</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Architected multi-stage CI/CD pipelines reducing manual intervention by 40%</li>
              <li>Provisioned AWS infrastructure using Terraform IaC with DevSecOps compliance</li>
              <li>Deployed Docker/Kubernetes workloads with rolling updates and auto-scaling</li>
            </ul>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur">
            <h3 className="text-2xl font-semibold text-cyan-400">AWS DevOps Engineer Intern</h3>
            <p className="text-gray-400 mb-2">Blue Planet InfoSolutions | Current</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Engineered production-grade CI/CD pipelines with GitHub Actions</li>
              <li>Achieved 20% cost reduction through AWS resource optimization</li>
              <li>Enforced DevSecOps standards with IAM, MFA, and security gates</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur hover:scale-105 transition">
            <h3 className="text-2xl font-semibold text-cyan-400 mb-2">AutoOps Platform</h3>
            <p className="text-gray-300 mb-4">Autonomous GitOps Kubernetes delivery system with Jenkins, Docker, Helm, and ArgoCD achieving 80% deployment efficiency improvement</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">Kubernetes</span>
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">ArgoCD</span>
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">Terraform</span>
            </div>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur hover:scale-105 transition">
            <h3 className="text-2xl font-semibold text-cyan-400 mb-2">Hybrid Cloud Infrastructure</h3>
            <p className="text-gray-300 mb-4">Secure on-premise + AWS hybrid cloud with Terraform IaC, AES-256 encryption, and zero-trust security</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">AWS</span>
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">Terraform</span>
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">Security</span>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-8 text-center">Education</h2>
        <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold text-cyan-400">Master of Computer Applications (MCA)</h3>
          <p className="text-gray-400">AMC Engineering College, Bengaluru | 2023-2025</p>
          <p className="text-gray-300 mt-2">CGPA: 8.8/10</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 text-center text-gray-400 border-t border-gray-700">
        <p>© 2026 Pramod S S. Built with Next.js, TypeScript & Tailwind CSS</p>
      </footer>
    </main>
  )
}
