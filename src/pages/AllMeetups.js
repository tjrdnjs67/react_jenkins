import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";

// const DUMMY_DATA = [
//   {
//     id: 'm1',
//     title: 'This is a first meetup',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Meetupstreet 5, 12345 Meetup City',
//     description:
//       'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//   },
//   {
//     id: 'm2',
//     title: 'This is a second meetup',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Meetupstreet 5, 12345 Meetup City',
//     description:
//       'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//   },
// ];

// 리액트는 반드시 동기식으로 구성되어 있어야 하며 프로미스가 아닌 JSX를 반환해야 한다, 로딩 스피너와 같은 임시 JSX를 반환 후 업데이트하기, state이용하기 -> 응답 데이터를 확보하면 state 바꾼다

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://react-getting-started-35e06-default-rtdb.firebaseio.com/meetups.json')
    .then((response) => {
      return response.json();
    }).then((data) => {
      const meetups = [];

      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        };

        meetups.push(meetup);
      }

      setIsLoading(false);
      setLoadedMeetups(meetups);
    });
  }, []);
  // 의존성 고려

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
  <section>
    <h1>All Meetups</h1>
      {/* { [<li>Item1</li>, <li>Item2</li>] } */}
      {/* { DUMMY_DATA.map((meetup) => {
        return (
          <li key={meetup.id}>{meetup.title}</li>
          )
      })} */}
      <MeetupList meetups={loadedMeetups} />
  </section>
  )
}

export default AllMeetupsPage;