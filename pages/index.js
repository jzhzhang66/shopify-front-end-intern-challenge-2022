import useSWR from 'swr'
import axios from 'axios'
import Post from '../components/post';

const apiKey = 'XeLYxbB1FHThsJO2fcYssL3YM9MPRSTwnUozD21a';
const url = `https://api.nasa.gov/planetary/apod?count=10&api_key=${apiKey}`;

export default function Home() {
  // const fetcher = url => {
  //   console.log('asdfhlkajsdf')
  //   return axios.get(url).then(r => r.json());
  // }
  // const { data, error } = useSWR(url, fetcher);
  const fetcher = url => axios.get(url).then(r => console.log(r.data));
  fetcher(url);
  const dummyData = [{
    date: '2008-09-10',
    explanation: "What created this unusual partial ring around Saturn?  Discovered last year, the arc was captured in clear detail only two months ago by the Saturn-orbiting Cassini spacecraft.  Since the arc occupies the same orbit as the small moon Anthe, a leading hypothesis holds that the arc was created by, and is replenished by, meteor impacts on Anthe.  Similar arcs have been previously discovered, including an arc associated with the small Saturnian moon Methone, one arc related to Saturn's G ring, and several arcs orbiting Neptune.  Pictured above, Anthe, only two kilometers across, is seen as the bright point near the top of the Anthe arc. The Anthe arc was imaged by the robotic space probe as it swooped to within 1.5 million kilometers of the small moon.   digg_url = 'http://apod.nasa.gov/apod/ap080910.html'; digg_skin = 'compact';",
    hdurl: 'https://apod.nasa.gov/apod/image/0809/anthearc_cassini_big.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'The Anthe Arc around Saturn',
    url: 'https://apod.nasa.gov/apod/image/0809/anthearc_cassini.jpg'
  },
  {
    date: '2010-10-11',
    explanation: "Does spiral galaxy NGC 2683 have a bar across its center? Being so nearly like our own barred Milky Way Galaxy, one might guess it has. Being so nearly edge-on, however, it is hard to tell. Either way, this gorgeous island universe, cataloged as NGC 2683, lies a mere 20 million light-years distant in the northern constellation of the Cat (Lynx). NGC 2683 is seen nearly edge-on in this cosmic vista, with more distant galaxies scattered in the background. Blended light from a large population of old yellowish stars forms the remarkably bright galactic core. Starlight silhouettes the dust lanes along winding spiral arms, dotted with the telltale blue glow of young star clusters in this galaxy's star forming regions.",
    hdurl: 'https://apod.nasa.gov/apod/image/1010/ngc2683_hst_big.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'NGC 2683: Spiral Edge-On',
    url: 'https://apod.nasa.gov/apod/image/1010/ngc2683_hst.jpg'
  },
  {
    copyright: 'Yuri BeletskyLas Campanas ObservatoryCarnegie Institution',
    date: '2015-07-20',
    explanation: 'A comet has brightened quickly and unexpectedly. Discovered last year, Comet C/2014 Q1 (PanSTARRS) is expected to be visible now for a few days to the unaided eye, just after sunset, from some locations.  The comet rounded the Sun on July 6 and apparently has shed quite a bit of gas and dust. Today it is now as close as it will ever get to the Earth, which is another factor in its recent great apparent brightness and the large angular extent of its tails.  In the featured image taken two days ago, Comet PanSTARRS is seen sporting a short white dust tail fading to the right, and a long blue ion tail pointing away from the recently set Sun. A crescent moon dominates the image center.  Tomorrow, Comet PannSTARRS will pass only 7 degrees away from a bright Jupiter, with even brighter Venus nearby.  Due to its proximity to the Sun, the comet and its tails may best be seen in the sunset din with binoculars or cameras using long-duration exposures.    APOD Editor to Speak: Saturday, August 8 at Keweenaw Science & Engineering Festival',
    hdurl: 'https://apod.nasa.gov/apod/image/1507/comet2014q1_beletsky_950.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Comet PanSTARRS and a Crescent Moon',
    url: 'https://apod.nasa.gov/apod/image/1507/comet2014q1_beletsky_1080.jpg'
  }]
  return (
    <div className="page-container">
      {dummyData.map(curr => <Post postInfo={curr} key={curr.title} />)}
    </div>
  )
}
