import tak_image from "./images/member_photo/tak.jpg";
import seongyeomkim_image from "./images/member_photo/seongyeomkim.jpg";
import jeehunchoi_image from "./images/member_photo/jeehunchoi.jpg";
import donggunlee_image from "./images/member_photo/donggunlee.jpeg";
import joohyoungpark_image from "./images/member_photo/joohyoungpark.jpeg";
import yusangyun_image from "./images/member_photo/yusangyun.jpg";
import byoungjaekim_image from "./images/member_photo/byoungjaekim.jpg";
import minsunkim_image from "./images/member_photo/minsunkim.jpg";

const People = (
        <section>
          <h2>Who We Are</h2>
          <ul className="people_list">
            <li>
              <a href="https://www.takyeonlee.com" target='_blank'><img src={tak_image} /></a>
              <div className="name">Tak Yeon, Lee</div>
              <div className="role">Assistant Professor</div>
              <div className="email">
                takyeonlee@kaist.ac.kr
              </div>
              <div className="website">
                <a href="https://www.takyeonlee.com">website</a>
              </div>
            </li>
            <li>
              <img src={seongyeomkim_image} />
              <div className="name">Seon Gyeom, Kim</div>
              <div className="role">PhD Student</div>
              <div className="email">
                ksg_0320@kaist.ac.kr
              </div>
            </li>
            <li>
              <img src={joohyoungpark_image} />
              <div className="name">Juhyeong, Park</div>
              <div className="role">Master Student</div>
              <div className="email">
                wngud913@kaist.ac.kr
              </div>
            </li>
            <li>
              <img src={byoungjaekim_image} />
              <div className="name">Byoungjae, Kim</div>
              <div className="role">Master Student</div>
              <div className="email">
                bj.kim@kaist.ac.kr
              </div>
            </li>
            <li>
              <img src={yusangyun_image} />
              <div className="name">Yoosang, Yoon</div>
              <div className="role">Master Student</div>
              <div className="email">
                soulmilk98@kaist.ac.kr
              </div>
            </li>
            <li>
              <img src={minsunkim_image} />
              <div className="name">Minsun, Kim</div>
              <div className="role">Master Student</div>
              <div className="email">
                9909cindy@kaist.ac.kr 
              </div>
            </li>
            
          </ul>
          
            {/* <li>
              <img src={jeehunchoi_image} />
              <div className="name">Jee Hun, Choi</div>
              <div className="role">Undergraduate Researcher</div>
              <div className="email">
                jeehun@kaist.ac.kr
              </div>
            </li> */}
            {/* <li>
              <img src={donggunlee_image} />
              <div className="name">Dong Gun, Lee</div>
              <div className="role">Undergraduate Researcher</div>
              <div className="email">
                jlee4330@kaist.ac.kr
              </div>
            </li> */}
          {/* </ul> */}
        </section>);
export default People;
