import React, { useState } from 'react'; // Import useState
import blogList from '../utilis/blogdata'; // Ensure the path to blogdata is correct
import { useParams } from 'react-router-dom';
import PageHeader from './PageHeader';
import Tags from '../Shop/Tags';
import PopularPost from '../Shop/PopularPost';

const socialList = [
  { link: "#", iconName: "icofont-facebook", className: "facebook" },
  { link: "#", iconName: "icofont-twitter", className: "twitter" },
  { link: "#", iconName: "icofont-linkedin", className: "linkedin" },
  { link: "#", iconName: "icofont-instagram", className: "instagram" },
  { link: "#", iconName: "icofont-pinterest", className: "pinterest" }
];

const SingleBlog = () => {
  const [blog, setBlog] = useState(blogList); // Initialize state with blogList
  const { id } = useParams();
  
  // Find the blog item with the matching ID
  const result = blog.filter(b => b.id === Number(id));
  console.log(result[0]);

  return (
    <div>
      <PageHeader title={"Single Blog Pages"} curPage={"Blog / Blog Details"} />

      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className='col-lg-8 col-12'>
              <article>
                <div className='section-wrapper'>
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {result.map(item => (
                            <div key={item.id}>
                              <div className="post-thumb">
                                <img src={item.imgUrl} alt={item.title} />
                              </div>
                              <div className='post-content'>
                                <h3>{item.title}</h3>
                                <div className='meta-post'>
                                  <ul className='lab-ul'>
                                    {item.metaList.map((val, i) => (
                                      <li key={i}>
                                        <i className={val.iconName}></i>
                                        {val.text}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <p>{item.desc}</p>
                                <blockquote>
                                  <p>Dynamically recaptiualize distributed technologies is whwrease turkey
                                    chennels and onotononectally provide access to resource leveling experties vias worldwide deliverable
                                    uolisticly extend aserser are diverse vortals.
                                  </p>
                                  <cite>
                                    <a href="#">.....siku verma</a>
                                  </cite>
                                </blockquote>
                                <p>Online journal where an individual, group, or corporation presents a record of activities, thoughts, or beliefs. Some blogs operate mainly as news filters, collecting various online sources and adding short comments and Internet links.</p>
                                <img src="/src/assets/images/blog/single/01.jpg" alt="Blog Detail" />
                                <p>If you haven’t already, create buyer personas like the one below. To gain a better understanding of your target readers. And what type of content they’re interested in.</p>
                                <div className='video-thumb'>
                                  <img src="/src/assets/images/blog/single/02.jpg" alt="Video Thumbnail" />
                                  <a href="https://youtu.be/GaCZCQlLUZw?si=ujBjPnqRp4ULzn4O" className='video-button popup'
                                  target='_blank'
                                  
                                  >
                                    <i className='icofont-ui-play'></i>
                                  </a>
                                </div>
                                <p>Doraemon Cartoon without zoom effect, doraemon all new episodes in Hindi, doraemon all new episode, doraemon all episodes, all doraemon movies in Hindi, all doraemon movies, doraemon best episode, doraemon cartoon in Hindi, doraemon cartoon movie, doraemon cartoon new episode, cartoon doraemon in Hindi, cartoon doraemon movie, doraemon episodes without zoom effect. Latest Doraemon New Full Hindi Episode 90.</p>
                                <div className='tags-section'>
                                  <ul className='tags lab-ul'>
                                    <li><a href="">Agency</a></li>
                                    <li><a href="">Business</a></li>
                                    <li><a href="">Personal</a></li>
                                  </ul>
                                  <ul className='lab-ul social-icons'>
                                    {socialList.map((val, i) => (
                                      <li key={i}>
                                        <a href={val.link} className={val.className}>
                                          <i className={val.iconName}></i>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className='navigation-part'>
                      <div className='left'>
                        <a href="#" className='prev'>
                          <i className='icofont-double-left'></i> Previous Blog :-
                        </a>
                        <a href="#" className='title'>
                          Evisculate Parallel Processes Via Technica Sound models Authoritative
                        </a>
                      </div>
                      <div className='right'>
                        <a href="#" className='next'>
                          <i className='icofont-double-right'></i> Next Blog :-
                        </a>
                        <a href="#" className='title'> 
                          Evisculate Parallel Processes Via Technica Sound models Authoritative
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className='col-lg-4 col-12'>
              {/* Right section content can be added here */}
              <aside>
                <Tags/>
                <PopularPost/>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
