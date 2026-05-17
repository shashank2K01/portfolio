import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="max-w-5xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center text-2xl font-semibold">
            SA
          </div>
          <div>
            <div className="text-sm text-gray-300">Shashank Adiga</div>
            <div className="text-xs text-gray-400">
              DevOps Engineer — MBRDI • 3 years experience
            </div>
          </div>
        </div>
        <nav className="flex gap-4 items-center">
          <a href="#experience" className="text-sm hover:underline">
            Experience
          </a>
          <a href="#certifications" className="text-sm hover:underline">
            Certifications
          </a>
          <a href="#contact" className="text-sm hover:underline">
            Contact
          </a>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto p-6">
        {/* Hero */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="md:col-span-2"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Hi — I'm <span className="text-indigo-400">Shashank Adiga</span>
            </h1>
            <p className="mt-4 text-lg text-gray-300">
            DevOps Engineer at Mercedes-Benz Research & Development India (MBRDI) with 3 years of experience in containerization, Kubernetes, Helm, CI/CD pipelines, and Infrastructure as Code with Terraform. Experienced in implementing logging and monitoring solutions on AWS, and automating workflows using Scripting. Skilled at building secure, scalable cloud-native solutions with the ability to adapt quickly to evolving environments.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "Kubernetes",
                "Docker",
                "Jenkins",
                "AWS",
                "Prometheus",
                "Grafana",
                "Terraform",
                "Shell",
                "Python",
                "CI/CD",
                "Monitoring",
                "Helm",
              ].map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 rounded-full bg-gray-800 text-sm border border-gray-700"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Experience */}
        <section id="experience" className="mt-14">
          <h2 className="text-2xl font-bold">Experience</h2>
          <div className="mt-6 grid gap-6">
            <article className="bg-gray-900 p-6 rounded-2xl shadow-md">
              <h3 className="text-lg font-semibold">
                Mercedes-Benz R&D India (MBRDI)
              </h3>
              <p className="text-sm text-gray-300">
                Aug 2023 – Present | DevOps Engineer
              </p>
              <ul className="mt-4 list-disc ml-5 text-gray-300 space-y-2">
                <li>
                  Designed a custom logging solution with sidecar containers &
                  OpenSearch, alerting via Prometheus & Grafana.
                </li>
                <li>
                  Automated AWS infrastructure (VPC, subnets, RDS, EKS) with
                  Terraform; reduced costs by 35% through environment downsizing.
                </li>
                <li>
                  Built end-to-end Jenkins pipelines with Docker, Kubernetes,
                  Trivy scanning, and SMTP email alerts.
                </li>
                <li>
                  Integrated Jenkins with JMeter for performance testing.
                </li>
                <li>
                  Developed automation scripts in Python & Bash, eliminating
                  nightshift needs for routine jobs.
                </li>
              </ul>
            </article>

            <article className="bg-gray-900 p-6 rounded-2xl shadow-md">
              <h3 className="text-lg font-semibold">
                Mercedes-Benz R&D India (MBRDI)
              </h3>
              <p className="text-sm text-gray-300">
                May 2022 – Aug 2023 | Graduate Engineer Trainee
              </p>
              <ul className="mt-4 list-disc ml-5 text-gray-300 space-y-2">
                <li>
                  Migrated Pega, React & Java apps from VMs to Hybrid-Cloud
                  Kubernetes.
                </li>
                <li>
                  Upgraded clusters, integrated HashiCorp Vault for managing 30+
                  secrets.
                </li>
                <li>
                  Set up logging with S3, Grafana, and Loki; managed SSL renewals
                  with cert-manager.
                </li>
                <li>Implemented secure deployments via Jenkins CI/CD.</li>
              </ul>
            </article>
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="mt-14">
          <h2 className="text-2xl font-bold">Certifications</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="bg-gray-900 p-6 rounded-2xl shadow">
              <a
                href="https://www.credly.com/badges/3545b917-b7c1-4f62-8830-562a7581f33b/linked_in_profile"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-indigo-400 hover:underline"
              >
                AWS Certified Developer
              </a>
              <p className="text-sm text-gray-400">Associate</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-2xl shadow">
              <a
                href="https://www.credly.com/badges/2adea023-a3dc-49e5-a3b6-d263931d7069/public_url"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-indigo-400 hover:underline"
              >
                Certified Kubernetes Application Developer
              </a>
              <p className="text-sm text-gray-400">CKAD</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-2xl shadow">
              <a
                href="https://www.credly.com/badges/6562c0e1-f3e9-41af-bc7b-e3ea97cfccec/linked_in_profile"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-indigo-400 hover:underline"
              >
                Terraform Associate
              </a>
              <p className="text-sm text-gray-400">HashiCorp</p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-14">
          <h2 className="text-2xl font-bold">Key Projects</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-6 rounded-2xl shadow">
              <h4 className="font-semibold">Event Booking API</h4>
              <p className="text-sm text-gray-300 mt-2">
                Developed Golang API for event booking with JWT-based
                authentication & role-based access control. Deployed via
                Kubernetes with automated CI/CD pipelines.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-2xl shadow">
              <h4 className="font-semibold">CI/CD & Monitoring Platform</h4>
              <p className="text-sm text-gray-300 mt-2">
                Built a Jenkins-based CI/CD system integrated with Docker,
                Kubernetes, Trivy for security scanning, and Grafana/Prometheus
                for observability, including automated email alerts.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-14">
          <h2 className="text-2xl font-bold">Contact</h2>
          <div className="mt-6 space-y-2 text-sm text-gray-300">
            <div className="flex items-center gap-3">
              <Mail size={16} /> shashankadiga28@gmail.com
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} /> +91 94826 00845
            </div>
            <div className="flex items-center gap-3">
              <Linkedin size={16} />{" "}
              <a
                href="https://linkedin.com/in/adigashashank"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/adigashashank
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Github size={16} />{" "}
              <a
                href="https://github.com/shashank2K01"
                target="_blank"
                rel="noreferrer"
              >
                github.com/shashank2K01
              </a>
            </div>
          </div>
        </section>

        <footer className="mt-14 text-center text-gray-500 text-sm pb-12">
          © {new Date().getFullYear()} Shashank Adiga — DevOps Engineer
        </footer>
      </main>
    </div>
  );
}
