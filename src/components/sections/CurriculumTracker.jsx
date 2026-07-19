// src/components/sections/CurriculumTracker.jsx

import React from 'react';
import { BookOpen, FileText, GitPullRequest, GraduationCap, Award, Terminal, Clock, Target } from 'lucide-react';
import { curriculum, CURRICULUM_REPO, TRANSCRIPT_URL } from '../../assets/config';

export default function CurriculumTracker() {
  return (
    <section id="curriculum" className="pt-16 pb-24" aria-labelledby="curriculum-heading">
      <div className="container">
        {/* Header */}
        <div className="mb-12">
          <p className="font-mono text-sm uppercase tracking-widest text-cyan-500">Academic Rigor</p>
          <div className="mt-2 flex flex-wrap items-center gap-4">
            <h2 id="curriculum-heading" className="text-3xl font-bold text-white sm:text-4xl">
              B.Sc. Computer Science
            </h2>
            <span className="inline-flex items-center rounded-full bg-cyan-900/30 px-3 py-1 text-xs font-medium text-cyan-400 ring-1 ring-cyan-800/50">
              <Award size={12} className="mr-1" />
              Steering Committee Validated
            </span>
          </div>
          <p className="mt-4 max-w-3xl text-slate-400">
            Self-directed 176-credit program (Systems & Software Engineering) modeled after MIT, Stanford,
            and CMU core CS curricula. Validated by an external Degree Steering Committee.
          </p>
        </div>

        {/* Program Stats */}
        <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <StatCard
            icon={GraduationCap}
            label="Total Credits"
            value={`${curriculum.credits.total}`}
            sub="Semester Credits"
           // href={CURRICULUM_REPO}
          />
          <StatCard
            icon={FileText}
            label="Examinations"
            value={`${curriculum.exams.total}`}
            sub="Closed-Book Exams"
          //  href={TRANSCRIPT_URL}
          />
          <StatCard
            icon={BookOpen}
            label="Research Papers"
            value={`${curriculum.papers.total}`}
            sub="Landmark Reviews"
          //  href={CURRICULUM_REPO + '/tree/main/_research/paper-reviews'}
          />
          <StatCard
            icon={Award}
            label="Technical Books"
            value={`${curriculum.books.total}`}
            sub="Required Reading"
          //  href={CURRICULUM_REPO + '/tree/main/_reading-list'}
          />
          <StatCard
            icon={GitPullRequest}
            label="Open Source"
            value={`${curriculum.openSource.total}`}
            sub="Meaningful PRs"
          //  href={CURRICULUM_REPO + '/blob/main/_opensource/contributions.md'}
          />
        </div>

        {/* Research & Reading */}
        <div className="mb-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <div className="mb-4 flex items-center gap-2">
              <BookOpen size={20} className="text-cyan-500" />
              <h3 className="text-lg font-bold text-white">Research Papers</h3>
            </div>
            <p className="mb-4 text-sm text-slate-400">
              {curriculum.papers.completed}/{curriculum.papers.total} reviewed
            </p>
            <a
            //  href={CURRICULUM_REPO + '/tree/main/_research/paper-reviews'}
              className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Coming Soon →
            </a>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <div className="mb-4 flex items-center gap-2">
              <Award size={20} className="text-cyan-500" />
              <h3 className="text-lg font-bold text-white">Reading List</h3>
            </div>
            <p className="mb-4 text-sm text-slate-400">
              {curriculum.books.completed}/{curriculum.books.total} completed
            </p>
            <a
            //  href={CURRICULUM_REPO + '/tree/main/_reading-list'}
              className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Coming Soon →
            </a>
          </div>
        </div>

        {/* Exam Progress */}
        <div className="mb-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <div className="mb-4 flex items-center gap-2">
            <FileText size={20} className="text-cyan-500" />
            <h3 className="text-lg font-bold text-white">Exam System</h3>
          </div>
          <p className="mb-4 text-sm text-slate-400">
            Closed-book midterms (30%) + finals (40%) for all major courses. Self-graded via rigorous rubric.
          </p>
          <div className="space-y-2">
            {curriculum.years.map((year) => {
              const yearExams = year.courses.filter(c => c.credits >= 3).length * 2;
              const completedExams = year.courses.filter(c => c.status === 'Completed' && c.credits >= 3).length * 2;
              return (
                <div key={year.year} className="flex items-center gap-4">
                  <span className="text-sm text-slate-400">Year {year.year}</span>
                  <div className="flex-1 h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className="h-full bg-cyan-500 transition-all"
                      style={{ width: `${(completedExams / yearExams) * 100}%` }}
                    />
                  </div>
                  <span className="text-sm text-slate-400">{completedExams}/{yearExams} exams</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Year-by-Year Progress */}
        {curriculum.years.map((year) => {
          const totalCourses = year.courses.length;
          const completedCourses = year.courses.filter(c => c.status === 'Completed').length;
          const inProgressCourses = year.courses.filter(c => c.status === 'In Progress').length;
          const totalProgress = Math.round(((completedCourses + inProgressCourses) / totalCourses) * 100);

          return (
            <div key={year.year} className="mb-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-white">Year {year.year}: {year.focus}</h3>
                  <p className="mt-1 text-sm text-slate-400">{year.credits} Credits · {year.status}</p>
                </div>
              </div>

              <div className="mb-6">
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-slate-400">Progress</span>
                  <span className="font-medium text-cyan-400">
                    {completedCourses} Completed · {inProgressCourses} Active
                  </span>
                </div>
                <div
                  className="flex h-2 w-full overflow-hidden rounded-full bg-slate-800"
                  role="progressbar"
                  aria-valuenow={totalProgress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`Year ${year.year} Progress: ${totalProgress}% complete`}
                >
                  <div
                    className="h-full bg-emerald-500 transition-all"
                    style={{ width: `${(completedCourses / totalCourses) * 100}%` }}
                  />
                  <div
                    className="h-full bg-cyan-500/50 transition-all"
                    style={{ width: `${(inProgressCourses / totalCourses) * 100}%` }}
                  />
                </div>
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                {year.courses.map((course) => (
                  <div
                    key={course.code}
                    className={`flex items-center justify-between rounded-lg border px-4 py-3 transition-all hover:scale-[1.01] animate-fadeIn ${
                      course.status === 'In Progress'
                        ? 'border-cyan-900/50 bg-cyan-950/20'
                        : course.status === 'Completed'
                        ? 'border-emerald-900/50 bg-emerald-950/20'
                        : 'border-slate-800 bg-slate-950/50'
                    }`}
                  >
                    <div>
                      <p className="text-sm font-medium text-white">{course.name}</p>
                      <p className="text-xs text-slate-500">{course.code} · {course.institution} · {course.credits} cr</p>
                    </div>
                    <StatusBadge status={course.status} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* Capstone Preview */}
        <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6">
          <div className="mb-3 flex items-center gap-2">
            <GitPullRequest size={18} className="text-cyan-500" />
            <h3 className="text-lg font-bold text-white">Year 5 Capstone</h3>
            <span className="ml-auto text-xs text-slate-500">Due June 2031</span>
          </div>
          <p className="font-medium text-white">{curriculum.capstone.title}</p>
          <p className="mt-2 leading-relaxed text-sm text-slate-400">{curriculum.capstone.description}</p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-slate-800 px-2.5 py-0.5 text-xs font-medium text-slate-400">
              {curriculum.capstone.status}
            </span>
            <div className="flex flex-wrap gap-1">
              {['Raft', 'Kubernetes', 'gRPC', 'Go'].map((tech) => (
                <span key={tech} className="inline-flex items-center rounded-full bg-slate-800 px-2 py-0.5 text-xs font-medium text-cyan-400">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ icon: Icon, label, value, sub, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-xl border border-slate-800 bg-slate-900 p-4 transition-all hover:border-cyan-500 hover:bg-slate-800"
    >
      <div className="mb-2 flex items-center gap-2 text-cyan-500 transition-colors group-hover:text-cyan-400" aria-hidden="true">
        <Icon size={20} />
      </div>
      <p className="text-2xl font-bold text-white">{value}</p>
      <p className="text-sm font-medium text-slate-300">{label}</p>
      <p className="text-xs text-slate-500">{sub}</p>
    </a>
  );
}

function StatusBadge({ status }) {
  const styles = {
    'Completed': 'border-emerald-800 bg-emerald-950 text-emerald-400',
    'In Progress': 'border-cyan-800 bg-cyan-950 text-cyan-400',
    'Not Started': 'border-slate-700 bg-slate-900 text-slate-500',
  };
  return (
    <span className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${styles[status] || styles['Not Started']}`}>
      {status}
    </span>
  );
}
