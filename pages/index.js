import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Claw_Fountain_at_Stanford_Univerisity.JPG/1280px-Claw_Fountain_at_Stanford_Univerisity.JPG",
    address: "Standford 5, 12345 California",
    description: "This is our first meetup.",
  },
  {
    id: "m2",
    title: "A second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Claw_Fountain_at_Stanford_Univerisity.JPG/1280px-Claw_Fountain_at_Stanford_Univerisity.JPG",
    address: "Standford 5, 12345 California",
    description: "This is our second meetup.",
  },
  {
    id: "m3",
    title: "A third meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Claw_Fountain_at_Stanford_Univerisity.JPG/1280px-Claw_Fountain_at_Stanford_Univerisity.JPG",
    address: "Standford 5, 12345 California",
    description: "This is our third meetup.",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}
export async function getStaticProps() {
  /* Fetch data from API */
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1,
  };
}

export default HomePage;
