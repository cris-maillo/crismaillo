import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown'; 
import rehypeRaw from "rehype-raw";
import articleFiles from './articles/index';
import { useNavigate } from 'react-router-dom';
import LoadingBar from '../LoadingBar';
import '../../App.css';

const Article = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [articleContent, setArticleContent] = useState(null);

  useEffect(() => {
    const loadArticle = async () => {
      const resolvedFiles = await Promise.all(articleFiles); 
      const matchedFile = resolvedFiles.find(file => file.default.includes(id));

      if (matchedFile) {
        const response = await fetch(matchedFile.default);
        const markdown = await response.text();
        const { data, content: articleBody } = matter(markdown);

        setArticleContent({ ...data, articleBody});
      }
    };

    loadArticle().catch(console.error);
  }, [id]);

  if (!articleContent) return <LoadingBar/>;

  return (
    <div>
        <div className="articleHead">
            <div className="returnButton">
                <h5 onClick={() => navigate('/text')}>← back</h5>
            </div>
            <div className="articleTitle">
                <h2>{articleContent.title}</h2>
            </div>
        </div>

        <div className="textContainer article">
            <div className="articleText"><ReactMarkdown rehypePlugins={[rehypeRaw]}>{articleContent.articleBody}</ReactMarkdown></div>
        </div>
    </div>
  );
};

export default Article;
