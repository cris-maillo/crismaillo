/* eslint-disable react/prop-types */
import './../App.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';

// ✏️ Edit your projects here
const projects = [
  {
    year: '2026',
    title: 'fabrika',
    description: 'Automated synthetic data generation at scale. Upload Mermaid.js diagrams, data dictionaries, sample data, or use AI to generate realistic synthetic data for testing, development, and prototyping.',
    link: 'https://fabrika-live.vercel.app/',
  },
  {
    year: '2024',
    title: 'LED Screen',
    description: 'Tutorial on how to set up a RGB LED Screen with a ESP32-WROOM-32 microcontroller and how to display gifs on it',
    link: 'https://github.com/cris-maillo/led-panel-tutorial',
  },
  {
    year: '2020',
    title: 'YogAI',
    description: 'I created <a href="https://cris-maillo.github.io/yogAI/" target="_blank" rel="noopener noreferrer">yogAI</a> inspired by various Machine Learning models for visual recognition I experimented with during my internship. YogAI is built using <a href="https://www.tensorflow.org/lite/models/pose_estimation/overview" target="_blank" rel="noopener noreferrer">Pose.Net</a>, developed by TensorFlow, and <a href="https://ml5js.org/" target="_blank" rel="noopener noreferrer">ml5.js</a>.',
    link: 'https://youtu.be/mW6Z9TIqNUQ'
  },
];

// ✏️ Edit your posts here. Add an `id` to link to an /article/:id page.
const posts = [
  {
    date: '20 06 2026',
    tag: 'AI',
    title: 'Improving on my AI workflow',
    description: 'Live tweeting learning how to take my AI workflow to the next level.',
    link: 'https://x.com/cris_maillo/status/2068289056308380055',
  }
];

function ProjectRow({ project }) {
  return (
    <div className="row projectRow">
      <span className="rowYear">{project.year}</span>
      <span className="rowMain">
        {project.link ? (
          <a
            className="rowTitle"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.title}
          </a>
        ) : (
          <span className="rowTitle">{project.title}</span>
        )}
        {/* description may contain inline <a> links, so render it as HTML */}
        <span
          className="rowDescription"
          dangerouslySetInnerHTML={{ __html: project.description }}
        />
      </span>
    </div>
  );
}

function PostRow({ post }) {
  const body = (
    <>
      <span className="rowDate">{post.date}</span>
      <span className="tag">{post.tag}</span>
      <span className="rowMain">
        <span className="rowTitle">{post.title}</span>
        <span className="rowDescription">{post.description}</span>
      </span>
    </>
  );

  if (post.id) {
    return (
      <Link to={`/article/${post.id}`} className="row postRow">
        {body}
      </Link>
    );
  }

  if (post.link) {
    return (
      <a
        className="row postRow"
        href={post.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {body}
      </a>
    );
  }

  return <div className="row postRow">{body}</div>;
}

function LandingPage() {
  return (
    <div className="page">
      <header className="hero">
        <h1 className="heroTitle">CRIS MAILLO</h1>
      </header>

      <main className="content">
        <p
          className="intro"
          onMouseOver={(e) => {
            if (e.target.classList.contains('hl')) {
              e.target.classList.add('hl-on');
            }
          }}
        >
          Hey I&apos;m <span className="hl hl-cris">Cris</span>. I like to do
          things. Maybe too many things. I design, I build, I write, I learn.
          I&apos;m a Data Consultant at <span className="hl hl-ibm">IBM</span>{' '}
          interested in BI and Data Consumption. I&apos;ve built{' '}
          <span className="hl hl-yoga">yogAI</span>, fabrika, and I&apos;m currently
          building AAA. I like tinkering with hardware, cameras, touchdesigner,{' '}
          <span className="hl hl-synths">synths</span>. I live in London and I
          love exploring London. I like having a{' '}
          <span className="hl hl-drink">drink</span> and a{' '}
          <span className="hl hl-snack">snack</span> with my friends in terraces
          in the <span className="hl hl-sun">sun</span>.
          I never know enough and I am always learning.
        </p>

        <section className="listSection">
          <h2 className="sectionHeading">Projects</h2>
          <div className="list">
            {projects.map((project, index) => (
              <ProjectRow project={project} key={index} />
            ))}
          </div>
        </section>

        <section className="listSection">
          <h2 className="sectionHeading">Posts</h2>
          <div className="list">
            {posts.map((post, index) => (
              <PostRow post={post} key={index} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default LandingPage;
