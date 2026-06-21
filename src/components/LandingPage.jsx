import './../App.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';

// ✏️ Edit your projects here
const projects = [
  {
    year: '2026',
    title: 'Improving on my AI workflow',
    description: 'Learning on stuff and doing stuff is stuffy',
  },
  {
    year: '2026',
    title: 'Improving on my AI workflow',
    description: 'Learning on stuff and doing stuff is stuffy',
  },
];

// ✏️ Edit your posts here. Add an `id` to link to an /article/:id page.
const posts = [
  {
    date: '12 - 07 - 2026',
    tag: 'DATA',
    title: 'Improving on my AI workflow',
    description: 'Learning on stuff and doing stuff is stuffy',
  },
  {
    date: '12 - 07 - 2026',
    tag: 'DATA',
    title: 'Improving on my AI workflow',
    description: 'Learning on stuff and doing stuff is stuffy',
  },
  {
    date: '12 - 07 - 2026',
    tag: 'DATA',
    title: 'Improving on my AI workflow',
    description: 'Learning on stuff and doing stuff is stuffy',
  },
];

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

  return post.id ? (
    <Link to={`/article/${post.id}`} className="row postRow">
      {body}
    </Link>
  ) : (
    <div className="row postRow">{body}</div>
  );
}

function LandingPage() {
  return (
    <div className="page">
      <header className="hero">
        <h1 className="heroTitle">CRIS MAILLO</h1>
      </header>

      <main className="content">
        <p className="intro">
          Hey I&apos;m Cris. I like to do things. Maybe too many things. I design,
          I build, I write, I learn. I&apos;m a Data Consultant at IBM interested
          in BI and Data Consumption. I&apos;ve built yoga.AI, fabrika, and
          currently building AAA. I like tinkering with hardware, cameras,
          touchdesigner, synths. I live in London and I love exploring London. I
          like having a drink and a snack with my friends in terraces in the sun.
          I never know enough and I am always learning.
        </p>

        <section className="listSection">
          <h2 className="sectionHeading">Projects</h2>
          <div className="list">
            {projects.map((project, index) => (
              <div className="row projectRow" key={index}>
                <span className="rowYear">{project.year}</span>
                <span className="rowMain">
                  <span className="rowTitle">{project.title}</span>
                  <span className="rowDescription">{project.description}</span>
                </span>
              </div>
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
