import '../../App.css';
import Theme from './Theme';


function Toolbox() {

    const themes = [
        {
          name: 'Exploring',
          subthemes: [
            {
              title: 'Digital Spaces',
              resources: [
                { label: 'tomasmaillo.com', href: 'https://www.tomasmaillo.com/' },
                { label: 'are.na', href: 'https://www.are.na/' },
                { label: 'Sunday Sites', href: 'https://sundaysites.cafe/' },
              ],
            },
            {
              title: 'Physical Spaces',
              resources: [
                { label: 'the Barbican', href: 'https://www.barbican.org.uk/' },
                { label: 'London', href: 'https://goo.gl/maps/Af39zzksNfxmQWFs9' },
                { label: 'Berlin', href: 'https://goo.gl/maps/QxAbGkSdYBJ31NZL8' },
              ],
            },
          ],
        },
        {
          name: 'Reading',
          subthemes: [
            {
              title: 'Newsletters',
              resources: [
                { label: 'Letters of Note', href: 'https://news.lettersofnote.com/' },
                { label: 'Dense Discovery', href: 'https://www.densediscovery.com/' },
              ],
            },
            {
              title: 'Books',
              resources: [
                { label: 'Crying in H Mart', href: 'https://en.wikipedia.org/wiki/Crying_in_H_Mart' },
                { label: 'Severance', href: 'https://en.wikipedia.org/wiki/Severance_(novel)' },
                { label: 'The Idiot', href: 'https://en.wikipedia.org/wiki/The_Idiot_(Batuman_novel)' },
                { label: 'Franny and Zooey', href: 'https://en.wikipedia.org/wiki/Franny_and_Zooey' },
              ],
            },
            {
              title: 'Articles + Blogs',
              resources: [
                { label: 'Uses This', href: 'https://usesthis.com/' },
                { label: 'Money Diaries', href: 'https://www.reddit.com/r/MoneyDiariesACTIVE/' },
                { label: 'Status as a Service', href: 'https://www.eugenewei.com/blog/2019/2/19/status-as-a-service' }
              ],
            },
          ],
        },
        {
          name: 'Using',
          subthemes: [
            {
              title: 'Tools',
              resources: [
                { label: 'Raycast', href: 'https://www.raycast.com/' },
                { label: 'Futureland', href: 'https://futureland.tv/home' },
                { label: 'Starship.rs', href: 'https://starship.rs/' },
              ],
            },
          ],
        },
        {
          name: 'Watching',
          subthemes: [
            {
              title: 'YouTube',
              resources: [
                { label: "Chef's Night Out", href: 'https://youtu.be/-GWItHgAfPA' },
                { label: 'Skid Row, Explained', href: 'https://youtu.be/rKo8Sv99MkM' },
                { label: 'Mystery Menu', href: 'https://youtu.be/OQqeTB2tK-A' },
              ],
            },
          ],
        },
        {
          name: 'Cooking',
          subthemes: [
            {
              title: 'What',
              resources: [
                { label: 'Okonomiyaki', href: './articles/okonomiyaki.html' },
                { label: 'Best Lasagna', href: 'https://www.epicurious.com/recipes/food/views/our-favorite-lasagna-with-sausage-spinach-and-three-cheeses-51253440' },
              ],
            },
            {
              title: 'With',
              resources: [
                { label: 'Stainless Steel Sauté', href: 'https://www.boroughkitchen.com/products/silapmos-saute-casserole-with-lid-26cm-4-3l' },
                { label: 'Turning Spatula', href: 'https://www.boroughkitchen.com/products/triangle-slotted-flexible-turner' },
                { label: 'Yukihira Saucepan', href: 'https://www.souschef.co.uk/products/yukihira-saucepan-16cm' },
              ],
            },
            {
              title: 'For',
              resources: [
                { label: 'People I love'},
              ],
            },
          ],
        },
    ];
      
  return (
    <div>
      <div className="toolboxContainer">
        <h2>Toolbox</h2>
        <p>this is a semi-current collection of writing, videos, websites, places, 
            and things that I appreciate, get inspired by, make use of, and think about on a 
            semi-regular basis. i&apos;m always looking for new inspiration to fuel my rabbit holes, 
            so if you ever come across something you think i&apos;d enjoy, <a href="mailto:cristinamaillo.r@gmail.com">please share</a>!</p>
        
        <div className="resourcesGrid">
            {themes.map((theme, index) => (
                <Theme key={index} name={theme.name} subthemes={theme.subthemes} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Toolbox;