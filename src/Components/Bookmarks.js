import { useEffect, useState } from "react";
import Bookmark from "./Bookmark";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
      //http://www.localhost:8000 + /bookmarks
      axios.get(API + "/bookmarks")
      .then((res) => {
        setBookmarks(res.data);
        console.log(res.data);
      }).catch((error) => {
        throw error;
      });
  }, []);
  return (
    <div className="Bookmarks">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Take me there</th>
              <th>See this bookmark</th>
            </tr>
          </thead>
          <tbody>
            {bookmarks.map((bookmark, index) => {
              return <Bookmark key={index} bookmark={bookmark} index={index} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Bookmarks;
