import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import logo from "../assets/Logo.png";

function Emails() {
  return (
    <div className="tabs-wrapper">
      <div className="box">
        <div className="email-logo">
          <img className="image-logo" src={logo} />
        </div>
        <div className="email-header"></div>
      </div>
      <Tabs defaultIndex={0}>
        <TabList>
          <Tab>
            <h1>RE: End of an era?</h1>
            <h1 className="subject-name">Zaineb Daoudi</h1>
          </Tab>
          <Tab>
            <h1>Essex personnel</h1>
            <h1 className="subject-name">Blaine Wilson</h1>
          </Tab>
          <Tab>
            <h1>Potassium Ferricyanide</h1>
            <h1 className="subject-name">Jonah Sharpe</h1>
          </Tab>
          <Tab>
            <h1>HR concerns</h1>
            <h1 className="subject-name">Brian Carroll</h1>
          </Tab>
          <Tab>
            <h1>End of an era?</h1>
            <h1 className="subject-name">Zaineb Daoudi</h1>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="panel-header">
            <h1 className="to-from">
              To: Jonah Sharpe, Sonia Nygaard, Brian Carroll, Blaine Wilson
            </h1>
            <h1 className="to-from">From: Zaineb Daoudi</h1>
            <div className="subject-wrapper">
              <h1 className="subject">Re: End of an era?</h1>
            </div>
          </div>
          <div className="panel-content">
            Afternoon all,
            <br /> <br /> <br /> Unfortunately it's bad news. Head office is
            pulling the plug on our project as we've apparently made <br />{" "}
            "absolutely no progress" in the past few years. Everybody will be
            reassigned to other <br /> departments/projects in the coming days.
            This is our last chance to produce something tangible, so if <br />{" "}
            anyone has any last minute tricks up their sleeves, now is the time.{" "}
            <br />
            <br />
            <br />
            Regards,
            <br /> Zaineb Daoudi <br />
            Clinical Research
            <br /> Coordinator Heroic Sciences
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-header">
            <h1 className="to-from">
              To: Jonah Sharpe, Sonia Nygaard, Brian Carroll, Zaineb Daoudi
            </h1>
            <h1 className="to-from">From: Blaine Wilson</h1>
            <div className="subject-wrapper">
              <h1 className="subject">Essex personnel</h1>
            </div>
          </div>
          <div className="panel-content">
            Hello, <br />
            <br />
            <br />
            Luckily the chaos with the reshuffling of staff by head office in
            the Essex lab has come to an end. Hopefully we can learn from their
            mistakes to avoid a similar situation here. <br />
            They started with 8 people in Team C, before transferring 5 into
            Team B, who then split again leaving 3 in Team A and 2 in Team B.{" "}
            <br />
            Then all of team A moved back to Team C to form a team of 6, while
            Team B transferred to Team A.
            <br />
            Team C then moved 5 people into Team B, leaving 1 in team C who will
            continue to work solo.
            <br />
            Finally, Team B transferred 1 extra man to Team A which all are
            happy with.
            <br />
            <br />
            <br /> Regards,
            <br /> Blaine Wilson <br />
            Quality Control Analyst <br />
            Heroic Sciences
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-header">
            <h1 className="to-from">
              To: Sonia Nygaard, Zaineb Daoudi, Brian Carroll, Blaine Wilson
            </h1>
            <h1 className="to-from">From: Jonah Sharpe</h1>
            <div className="subject-wrapper">
              <h1 className="subject">Potassium Ferricyanide</h1>
            </div>
          </div>
          <div className="panel-content">
            Hi all,
            <br />
            <br />
            <br />
            Our procurement department has just given me some exciting <br />
            news! They have managed to secure a small sample of the <br />
            extremely rare and extremely expensive chemical Potassium <br />
            <br />
            Ferricyanide to help with our research. Only <br />
            one vial is stored in the safe in the storage room, not to be
            accessed <br />
            unless you are certain that its usage will provide tangible <br />
            results in our mission. I will schedule a <br />
            <br />
            Zoom meeting where we can discuss safe handling as well as <br />
            examples of how this can benefit us. Until then, I will not accept
            any <br />
            requests for access to the chemical as the <br />
            opportunity to further our research is too great to pass up.
            <br />
            <br />
            <br />
            Kind regards,
            <br /> Jonah Sharpe
            <br /> Laboratory
            <br /> Chemist Heroic Sciences
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-header">
            <h1 className="to-from">To: Sonia Nygaard</h1>
            <h1 className="to-from">From: Brian Carroll</h1>
            <div className="subject-wrapper">
              <h1 className="subject">HR concerns</h1>
            </div>
          </div>
          <div className="panel-content">
            Hi Sonia,
            <br />
            <br />
            <br />
            I've just come out of a HR meeting who are concerned about your
            working schedule. They are <br />
            worried that seven days a week of working the night shift by
            yourself could impact your mental
            <br /> health. They've decided to change your hours to eight AM to
            four PM starting from next week. Let
            <br /> me know if you have any issues. <br />
            <br />
            <br />
            Kind regards,
            <br /> Brian Carroll
            <br /> Senior Laboratory Technician
            <br /> Heroic Sciences
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-header">
            <h1 className="to-from">
              To: Jonah Sharpe, Sonia Nygaard, Brian Carroll, Blaine Wilson
            </h1>
            <h1 className="to-from">From: Zaineb Daoudi</h1>
            <div className="subject-wrapper">
              <h1 className="subject">End of an era?</h1>
            </div>
          </div>
          <div className="panel-content">
            Morning all,
            <br />
            <br />
            <br />
            I've just been called for a meeting with head office regarding "the
            future of Xrayophine". I'm not <br /> sure what to expect but I
            thought you all ought to be aware as I know how much this means to
            all of <br /> you.
            <br /> <br /> <br /> Kind regards,
            <br /> Zaineb Daoudi <br /> Clinical Research Coordinator <br />{" "}
            Heroic Sciences
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Emails;
