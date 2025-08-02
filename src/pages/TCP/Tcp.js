import Page1 from "../../assets/images/Tcp/Page1.png";
import Page2 from "../../assets/images/Tcp/Page2.png";
import Page3 from "../../assets/images/Tcp/Page3.png";
import Page4 from "../../assets/images/Tcp/Page4.png";
import Page5 from "../../assets/images/Tcp/Page5.png";
import Page6 from "../../assets/images/Tcp/Page6.png";
import Page7 from "../../assets/images/Tcp/Page7.png";

import Solution1 from "../../assets/images/Tcp/Solution1.png";
import Solution2 from "../../assets/images/Tcp/Solution2.png";
import Solution3 from "../../assets/images/Tcp/Solution3.png";
import Solution4 from "../../assets/images/Tcp/Solution4.png";
import Solution5 from "../../assets/images/Tcp/Solution5.png";
import Solution6 from "../../assets/images/Tcp/Solution6.png";
import Solution7 from "../../assets/images/Tcp/Solution7.png";

const Tcp = () => {
  const caseStudySections = [
    {
      problem:
        "One of the first areas I tackled was the homepage. The original design included a hamburger menu on the desktop version, which is an outdated pattern that can obscure navigation and slow down user interaction. I replaced this with a clean, horizontal navigation bar that improves accessibility and makes site structure immediately clear to users. Additionally, the homepage lacked clear call-to-action buttons, making it harder for users to know where to go next. I introduced prominent CTAs to help guide user flow and improve overall usability. Finally, I noticed the layout didn’t fill the full height of the viewport, leading to awkward whitespace and an unbalanced visual experience. I adjusted the section styling and structure to make better use of vertical space, giving the homepage a more modern, polished look.",
      pageImg: Page1,
      solutionImg: Solution1,
    },
    {
      problem:
        "The original hamburger menu stood out in the wrong way—it used a different color scheme than the rest of the site, making it feel visually out of place and inconsistent with the brand. I updated the menu styling to align with the overall design system, creating a more cohesive user experience. Additionally, the placement of the navigation links inside the menu was unintuitive. They appeared on the opposite side of the hamburger button, which disrupted user flow and made navigation feel awkward. I redesigned the layout so that the links appear naturally aligned with the menu toggle, improving accessibility and user orientation. Lastly, the menu's animation was noticeably slow, which added unnecessary delay to a simple interaction. I optimized the animation speed and transitions to make opening and closing the menu feel quicker and more responsive.",
      pageImg: Page2,
      solutionImg: Solution2,
    },
    {
      problem:
        "The “About Us” and “A Comedy Club” sections of the original site lacked a clear, engaging representation of the club’s personality and purpose. The content was repetitive and didn’t add value for the user, leading to unnecessary clutter and reduced impact. I refined the content to be more concise and purposeful, focusing on the unique identity of the club and what sets it apart. To strengthen visual storytelling, I introduced supporting imagery and layout elements that reflect the club’s tone and vibe. Another critical issue was that these sections were not responsive, making them difficult to read or interact with on smaller screens. I restructured the layout using modern responsive design practices (e.g., CSS Grid, Flexbox, media queries), ensuring the content scales smoothly across all devices.",
      pageImg: Page3,
      solutionImg: Solution3,
    },
    {
      problem: "Problem 4: Branding was inconsistent across pages.",
      pageImg: Page4,
      solutionImg: Solution4,
    },
    {
      problem:
        "The original “Upcoming Events” section faced several usability issues. Text elements lacked proper hierarchy and spacing, which made content harder to read—especially for mobile users. I resolved these issues by improving typography, line spacing, and contrast for better readability and accessibility. The event cards also lacked responsiveness and didn’t scale well across different screen sizes, resulting in a clunky mobile experience. I rebuilt the layout using flexible design techniques that adapt gracefully to all devices. Another major improvement was the addition of filtering options, allowing users to easily explore events by category or date. This made the component more interactive and user-centric. Lastly, I ensured visual and structural continuity between the event preview on the homepage and the full events page. The old version used a different layout on the events page, which broke user flow and felt inconsistent. My redesign keeps the card-based layout consistent across both views, providing a more seamless user experience.",
      pageImg: Page5,
      solutionImg: Solution5,
    },
    {
      problem:
        "The original “Contact Us” page felt outdated and lacked the kind of visual appeal and clarity that encourages user interaction. I redesigned the layout to feel more modern and accessible, using clean spacing, better typography, and subtle design accents. To improve usability and draw attention, I added visually engaging contact details—such as icons, labels, and a clear hierarchy—and included multiple contact options (e.g., email, phone, social links, or a contact form), giving users more flexibility in how they reach out.",
      pageImg: Page6,
      solutionImg: Solution6,
    },
    {
      problem:
        "The original footer felt disconnected from the rest of the website, both visually and functionally. I redesigned it to match the site’s color scheme, creating visual consistency and reinforcing the brand identity. I also enhanced the footer’s usefulness by adding relevant links—such as social media, contact information, and quick navigation—to make it a more functional and integrated part of the overall user experience.",
      pageImg: Page7,
      solutionImg: Solution7,
    },
  ];

  return (
    <div className="tcp-case-study">
      <h1 className="heading">Case Study</h1>
      <p>The Comedy Pub</p>
      <h2>Redesigning TCP’s Website:</h2>
      <p>
        This case study showcases the redesign of TCP’s website — a local comedy
        club and pub — with a focus on improving user experience, visual
        consistency, and mobile responsiveness...
      </p>

      <div className="case-study-sections">
        {caseStudySections.map((section, index) => (
          <div className="case-block" key={index}>
            <h3>{section.problem}</h3>

            <div className="image-pair">
              <img
                src={section.pageImg}
                alt={`Before - ${section.problem}`}
                className="case-img"
              />
              <img
                src={section.solutionImg}
                alt={`After - ${section.problem}`}
                className="case-img"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tcp;
