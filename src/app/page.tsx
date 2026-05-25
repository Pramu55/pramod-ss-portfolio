'use client'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.1 })
    reveals.forEach(el => observer.observe(el))
  }, [])

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Background Pattern */}
      <div className="fixed inset-0 grid-pattern opacity-50" />
      
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="text-center space-y-8 animate-fade-in">
          <h1 className="text-8xl font-bold tracking-tighter text-stroke animate-float">PRAMOD S S</h1>
          <p className="text-2xl tracking-wide">DevOps Engineer & Full-Stack Developer</p>
          <p className="text-lg text-gray-400">Bengaluru, India | +91 9591634719</p>
          <div className="flex gap-6 justify-center mt-8">
            <a href="mailto:parmiprami9591@gmail.com" className="btn-primary px-8 py-4">Contact Me</a>
            <a href="https://github.com/Pramu55" target="_blank" className="btn-secondary px-8 py-4">GitHub</a>
            <a href="https://linkedin.com/in/pramod-s-s-268abb331" target="_blank" className="btn-secondary px-8 py-4">LinkedIn</a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto reveal">
          <h2 className="text-5xl font-bold mb-12">PROFESSIONAL SUMMARY</h2>
          <p className="text-xl leading-relaxed text-gray-300">
            DevOps Engineer skilled in CI/CD pipelines (GitLab, GitHub Actions, Harness), Kubernetes orchestration, Docker, Terraform IaC, and AWS cloud-native infrastructure delivering 40% faster deployments and 20% cost reduction through automation-first, DevSecOps-embedded delivery. Experienced in multi-environment release orchestration, IAM/RBAC security, CloudWatch observability, Agile/Scrum (Jira), test-first engineering, and AI-assisted development (GitHub Copilot) with strong ownership, cross-functional collaboration, and technical documentation skills.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="py-32 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto reveal">
          <h2 className="text-5xl font-bold mb-20">TECHNICAL SKILLS</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Programming & Scripting', skills: 'Java, Python, Bash/Shell scripting' },
              { title: 'Cloud Platforms', skills: 'AWS (EC2, S3, IAM, VPC, CloudWatch), Azure DevOps' },
              { title: 'CI/CD Automation', skills: 'GitHub Actions, Jenkins, GitLab CI/CD, Harness' },
              { title: 'Container Orchestration', skills: 'Docker, Kubernetes, Helm, ArgoCD, Rolling Updates' },
              { title: 'Infrastructure as Code', skills: 'Terraform, AWS CloudFormation, Version Control' },
              { title: 'DevSecOps Security', skills: 'IAM Policies, RBAC, MFA, Secret Scanning, Compliance' },
              { title: 'Monitoring & Observability', skills: 'AWS CloudWatch, Structured Logging, Alerting' },
              { title: 'Distributed Data', skills: 'Kafka, Redis, MongoDB, Apache Flink' },
              { title: 'Developer Tooling', skills: 'Git, GitLab, GitHub, Jira, VS Code, GitHub Copilot' },
            ].map((cat, i) => (
              <div key={i} className="card p-8 hover-lift">
                <h3 className="text-2xl font-bold mb-4">{cat.title}</h3>
                <p className="text-gray-600 leading-relaxed">{cat.skills}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto reveal">
          <h2 className="text-5xl font-bold mb-20">WORK EXPERIENCE</h2>
          <div className="space-y-16">
            {[
              {
                title: 'DevOps Deployment Engineer',
                company: 'Shramic Networks Pvt. Ltd., Bengaluru',
                period: 'Feb 2026 - Present',
                points: [
                  'Architected multi-stage CI/CD pipelines (GitLab, GitHub Actions) across dev/staging/prod with automated build, test, and security scanning cutting manual intervention by 40%',
                  'Provisioned AWS infrastructure (EC2, S3, IAM, VPC) via Terraform IaC with RBAC, secret scanning, and DevSecOps compliance gates ensuring audit-traceable governance',
                  'Deployed Docker/Kubernetes workloads (stateless/stateful) with rolling updates, horizontal scaling, and automated rollback delivering high availability and fault tolerance',
                  'Drove CloudWatch observability, Agile/Scrum delivery, and AI-assisted engineering (GitHub Copilot) for pipeline scripting, IaC automation, and test scaffolding'
                ]
              },
              {
                title: 'AWS DevOps Engineer Intern',
                company: 'Blue Planet InfoSolutions India Pvt. Ltd., Pune',
                period: 'Current',
                points: [
                  'Engineered production-grade CI/CD pipelines (GitHub Actions, GitLab) with automated build, test, and release orchestration reducing deployment lead time by 40% via Terraform IaC-driven environment provisioning',
                  'Implemented AWS cost governance (Cost Explorer, Budgets, tagging) achieving 20% infrastructure cost reduction through resource rightsizing and lifecycle optimization',
                  'Enforced DevSecOps standards (IAM least-privilege, MFA, automated security gates, and compliance checks) with Kubernetes-based orchestration for resilient, scalable containerized delivery',
                  'Managed Agile/Scrum delivery via Jira (sprint planning, backlog grooming) and produced technical documentation (ADRs, runbooks) to drive operational readiness'
                ]
              },
              {
                title: 'Java Software Developer',
                company: 'TechCiti Software Consulting Pvt. Ltd., Bengaluru',
                period: '2025',
                points: [
                  'Built scalable RESTful microservices and APIs using Java Spring Boot with automated unit testing and code quality validation driving a test-first, reliability-focused engineering culture',
                  'Collaborated with DevOps and React frontend teams to ensure environment parity, deployment-ready code, and seamless API integration reducing production incidents',
                  'Performed systematic debugging, root cause analysis, and performance optimization to strengthen application stability and operational reliability'
                ]
              },
              {
                title: 'AI & Machine Learning Engineer Intern',
                company: 'SkillHigh, Bengaluru',
                period: '2025',
                points: [
                  'Built end-to-end Python ML pipelines (classification, prediction) with automated preprocessing, feature engineering, and model validation applying CI/CD-style pipeline automation thinking',
                  'Developed and deployed CNN-based plant disease detection models with structured evaluation metrics demonstrating analytical and problem-solving skills applicable to distributed system diagnostics',
                  'Applied NLP and statistical learning on real-world datasets, reinforcing data-driven decision-making and performance measurement relevant to operational observability'
                ]
              }
            ].map((job, i) => (
              <div key={i} className="border-l-2 border-white pl-8 space-y-4">
                <h3 className="text-3xl font-bold">{job.title}</h3>
                <p className="text-xl text-gray-400">{job.company}</p>
                <p className="text-gray-500">{job.period}</p>
                <ul className="space-y-3 text-gray-300">
                  {job.points.map((point, j) => (
                    <li key={j} className="flex gap-3">
                      <span className="text-white mt-2">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects - continued in next section */}
      <section className="py-32 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto reveal">
          <h2 className="text-5xl font-bold mb-20">FEATURED PROJECTS</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: 'AutoOps Platform - Autonomous GitOps Kubernetes',
                desc: 'Architected fully automated DevOps platform using Jenkins, Docker, Kubernetes, Helm, and ArgoCD achieving 80% improvement in deployment efficiency with zero manual intervention. Built end-to-end CI/CD pipelines automating build, test, Docker image creation, and Kubernetes deployment with scalable, fault-tolerant service architecture.',
                tech: ['Jenkins', 'Docker', 'Kubernetes', 'Helm', 'ArgoCD', 'Terraform', 'Ansible', 'AWS']
              },
              {
                title: 'Hybrid Cloud Infrastructure - Secure, IaC, Fault Tolerant',
                desc: 'Architected hybrid cloud (on-premise + AWS EC2/S3) with Terraform IaC (version-controlled, repeatable, audit-traceable provisioning). Implemented AES-256 encryption (TLS/SSL) for secure user file uploads with encrypted data-at-rest, in-transit, and IAM-enforced encryption key management. Enforced zero-trust DevSecOps security (IAM, RBAC, MFA).',
                tech: ['AWS', 'Terraform', 'Docker', 'Kubernetes', 'Security', 'Encryption']
              },
              {
                title: 'RaithaNet - AI-Powered ML Platform',
                desc: 'Architected Python ML pipelines (TensorFlow/Keras) with automated preprocessing, hyperparameter tuning, cross-validation, and model versioning for crop recommendation, fertilizer prediction, and CNN disease detection. Engineered transfer learning CNN for multi-class plant disease classification with real-world high-accuracy inference.',
                tech: ['Python', 'TensorFlow', 'Keras', 'FastAPI', 'Docker', 'React', 'CNN']
              }
            ].map((project, i) => (
              <div key={i} className="card p-10 hover-lift space-y-6">
                <h3 className="text-3xl font-bold">{project.title}</h3>
                <p className="text-lg text-gray-700 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((t, j) => (
                    <span key={j} className="px-4 py-2 bg-black text-white text-sm font-mono">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto reveal space-y-20">
          <div>
            <h2 className="text-5xl font-bold mb-12">EDUCATION</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass p-10 space-y-4">
                <h3 className="text-3xl font-bold">Master of Computer Applications (MCA)</h3>
                <p className="text-xl text-gray-400">AMC Engineering College, Bengaluru</p>
                <p className="text-gray-500">2023-2025</p>
                <p className="text-2xl font-bold">CGPA: 8.8/10</p>
                <p className="text-gray-400">Coursework: Cloud Computing, Data Analytics, Machine Learning, AI, AWS DevOps, Python</p>
              </div>
              <div className="glass p-10 space-y-4">
                <h3 className="text-3xl font-bold">Bachelor of Computer Applications (BCA)</h3>
                <p className="text-xl text-gray-400">National Institute of Engineering College, Mysuru</p>
                <p className="text-gray-500">2020-2023</p>
                <p className="text-2xl font-bold">CGPA: 8.73/10</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-5xl font-bold mb-12">CERTIFICATIONS</h2>
            <div className="glass p-10">
              <a href="https://bit.ly/Pramod-Certifications" target="_blank" className="text-3xl hover:underline">View All AWS AI Certifications →</a>
            </div>
          </div>
          <div>
            <h2 className="text-5xl font-bold mb-12">ACHIEVEMENTS</h2>
            <ul className="space-y-4 text-xl text-gray-300">
              <li>▹ Reduced deployment lead time by 40% via GitLab CI/CD, Terraform IaC, and DevSecOps-embedded pipeline automation</li>
              <li>▹ Delivered fault-tolerant Docker/Kubernetes systems with CloudWatch observability, earning AWS AI certifications</li>
              <li>▹ Achieved 20% cost reduction through AWS resource optimization and governance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-white/10 text-center">
        <p className="text-gray-500">© 2026 Pramod S S. Built with Next.js, TypeScript & Tailwind CSS</p>
        <p className="text-gray-600 mt-2">DevOps Portfolio: https://personal-portfolio-phi-henna-97.vercel.app</p>
      </footer>
    </main>
  )
}
