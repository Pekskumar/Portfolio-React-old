import * as React from 'react';
import Section_heading from './Section_heading';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import WorkIcon from '@mui/icons-material/Work';
import ExtensionIcon from '@mui/icons-material/Extension';
import LanguageIcon from '@mui/icons-material/Language';
import InterestsIcon from '@mui/icons-material/Interests';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import CodeIcon from '@mui/icons-material/Code';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import BrushIcon from '@mui/icons-material/Brush';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import $ from 'jquery';


function TabPanel(props) {
  const { children, value, index, ...other } = props;



  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className='tabbing bg-white gp'>
      <div className='container'>
        <Section_heading
          heading='My Resume'
          subHeading='My Details'
        />




        <Box
          sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: 'divider' }}
          >
            <Tab label="Experiences" {...a11yProps(0)} />
            <Tab label="Education" {...a11yProps(1)} />
            <Tab label="Awards" {...a11yProps(2)} />
            <Tab label="Certificates" {...a11yProps(3)} />
            <Tab label="Extensions" {...a11yProps(4)} />
            <Tab label="Languages" {...a11yProps(5)} />
            <Tab label="Interests" {...a11yProps(6)} />
          </Tabs>
          <div class="bounce">
            <KeyboardDoubleArrowDownIcon></KeyboardDoubleArrowDownIcon>
          </div>
          <TabPanel value={value} index={0}>
            <section className='tab-width'>
              <div className='tab-title '>
                <h3 className='d-flex align-item-center'> <WorkIcon></WorkIcon>     Experiences </h3>
              </div>
              <div className='tab-body'>
                <div className='tab-one d-flex justify-space-between '>
                  <div className='t-icon'>
                    <span>1</span>
                  </div>
                  <div className='t-content ex-content'>
                    <div className='d-flex align-item-center'>
                      <div className='t-content-title'>
                        <h4>Front-End Engineer</h4>
                        <h5><a href='#'>Acquaint Softtech Private Limited</a></h5>
                      </div>
                      <div className='t-btn ex-btn text-center'>
                        <span className='primary-btn'>April, 2022 - Present</span>
                      </div>
                    </div>

                    <ul>
                      <li>Expand features, refine code, and improve processes, producing smoother operations and enhancing user engagement.</li>
                      <li>Design web applications according to client briefs and modify designs to meet changes in client specifications.</li>
                      <li>Designed dynamic and browser compatible pages using React js, HTML5, SAAS, CSS3, jQuery and Javascript.</li>
                      <li>Collaborated with web designers, back end developers and UX designers to design, build, test and improve web products.</li>
                      <li>Ensured scalability of front end elements by optimizing them for loading speed and performance.</li>                   
                      <li>Assisted in the training of new developers and web designers.</li>
                      <li>Designing the Web Application using HTML5, SCSS , Bootstrap , jQuery with WordPress, Angular and Laravel.</li>
                      <li>Ensure efficient web development by supporting designers and app developers while resolving website performance issues.</li>
                      </ul>
                  </div>
                </div>
              </div>
              <div className='tab-body'>
                <div className='tab-one d-flex justify-space-between'>
                  <div className='t-icon'>
                    <span>2</span>
                  </div>
                  <div className='t-content ex-content'>
                    <div className='d-flex align-item-center'>
                      <div className='t-content-title'>
                        <h4>Front-End Developer</h4>
                        <h5><a href="#"> CodeCaste Pvt Ltd</a></h5>
                      </div>
                      <div className='t-btn ex-btn text-center'>
                        <span className='primary-btn'>February, 2021 - April, 2022</span>
                      </div>
                    </div>

                    <ul>
                      <li>Experience themes and builder in WordPress such as Avada, Elementor, DIVI, Visual Composer, Astra, Sydney and WPBakery etc.</li>
                      <li>Developing customizing website using CBD in WordPress.</li>
                      <li>Experience in Web Application Development in React js Environment.</li>
                      <li>Designing fully customizing and pixel-perfect responsive website using Media Query and designing mobile-based features.</li>
                      <li>Ability to write Effectively, clean, minimalistic, reusable code.</li>
                      <li>Utilized Adobe Photoshop, XD and Figma for the production of web-optimized Images.</li>
                      <li>Experience in Front-end coding and deployment in a JavaScript Environment.</li>
                      <li>Understood the marketing objectives for each project assigned and ensured deadlines for assigned projects were met.</li>
                      <li>Maintained accuracy and attention to detail throughout the creative and development process.</li>
                      <li>Handled multiple projects simultaneously while ensuring all projects were completed within the deadline date.</li>
                      <li>Worked collaboratively with developers and in-house team to develop and maintain websites for a variety of clients.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='tab-body'>
                <div className='tab-one d-flex justify-space-between'>
                  <div className='t-icon'>
                    <span>3</span>
                  </div>
                  <div className='t-content ex-content'>
                    <div className='d-flex align-item-center'>
                      <div className='t-content-title'>
                        <h4>Computer Assistant Teacher</h4>
                        <h5>St. Xavier's High School</h5>
                      </div>
                      <div className='t-btn ex-btn text-center'>
                        <span className='primary-btn'>June, 2016 - October, 2020</span>
                      </div>
                    </div>

                    <ul>
                      <li>Organize, maintain and manage class systems in proper working condition.</li>
                      <li>Prepare execute lesson plans, assigning tasks, and evaluating student work and progress.</li>
                      <li>Design and develop appropriate computer instructional material.</li>
                      <li>Manage and monitor student behavior. Conduct group training sessions.</li>
                      <li>Creating inventory and report files for computer Lab as monthly basis.</li>
                      <li>Designing and developing website for school and everyday updation and also handling google business account.</li>
                      <li>Doing office work like Aadhaar Enabled DISE online application form filling and making Students General Register book.</li>
                      <li>Making question paper for all subjects like Gujarati, Hindi, Sanskrit and English Languages.</li>
                      <li>Updating computer software programs and hardware components as needed.</li>
                      <li>Install computer software programs and computer hardware and accessories.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <section className='tab-width'>
              <div className='tab-title '>
                <h3 className='d-flex align-item-center'><svg fill="#61dafb" width="40px" height="40px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3.33 8L10 12l10-6-10-6L0 6h10v2H3.33zM0 8v8l2-2.22V9.2L0 8zm10 12l-5-3-2-1.2v-6l7 4.2 7-4.2v6L10 20z" /></svg>    Education </h3>
              </div>
              <div className='tab-body'>
                <div className='tab-one d-flex justify-space-between btn-p'>
                  <div className='t-icon'>
                    <span>1</span>
                  </div>
                  <div className='t-content'>
                    <h4>MCA [SEM-5]</h4>
                    <h5>L.J. Institute of Computer Applications(GTU)</h5>
                  </div>
                  <div className='t-btn'>
                    <span className='primary-btn'>2012-15</span>
                  </div>
                </div>
              </div>
              <div className='tab-body'>
                <div className='tab-one d-flex justify-space-between btn-p'>
                  <div className='t-icon'>
                    <span>2</span>
                  </div>
                  <div className='t-content'>
                    <h4>BCA</h4>
                    <h5>St. Xavier's college(GU)</h5>
                  </div>
                  <div className='t-btn'>
                    <span className='primary-btn'>2009-12</span>
                  </div>
                </div>
              </div>
              <div className='tab-body'>
                <div className='tab-one d-flex justify-space-between btn-p'>
                  <div className='t-icon'>
                    <span>3</span>
                  </div>
                  <div className='t-content'>
                    <h4>D.El.Ed.</h4>
                    <h5>NIOS (Govt. of India)</h5>
                  </div>
                  <div className='t-btn'>
                    <span className='primary-btn'>2017-19</span>
                  </div>
                </div>
              </div>

            </section>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <section className='tab-width'>
              <div className='tab-title '>
                <h3 className='d-flex align-item-center'><WorkspacePremiumIcon></WorkspacePremiumIcon>   Awards</h3>
              </div>
              <div className='tab-body'>
                <div className='tab-one d-flex justify-space-between btn-p'>
                  <div className='t-icon'>
                    <span>1</span>
                  </div>
                  <div className='t-content'>
                    <h4>Good Academic Grades Award</h4>
                    <h5>St. Xavier's College</h5>
                  </div>
                  <div className='t-btn'>
                    <span className='primary-btn'>2011</span>
                  </div>
                </div>
              </div>
            </section>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <section className='tab-width'>
              <div className='tab-title '>
                <h3 className='d-flex align-item-center'><svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M1 0H2H18H19V1V4.08296C21.8377 4.55904 24 7.027 24 10C24 11.777 23.2275 13.3736 22 14.4722V22V23.8685L20.4453 22.8321L18 21.2019L15.5547 22.8321L14 23.8685V22V20H2H1V19V1V0ZM14 18V14.4722C12.7725 13.3736 12 11.777 12 10C12 7.027 14.1623 4.55904 17 4.08296V2H3V18H14ZM16 15.6586V20.1315L17.4453 19.1679L18 18.7981L18.5547 19.1679L20 20.1315V15.6586C19.3744 15.8797 18.7013 16 18 16C17.2987 16 16.6256 15.8797 16 15.6586ZM18 6C15.7909 6 14 7.79086 14 10C14 12.2091 15.7909 14 18 14C20.2091 14 22 12.2091 22 10C22 7.79086 20.2091 6 18 6ZM11 9.00001H5V7.00001H11V9.00001ZM5 12H10V10H5V12ZM7 15H5V13H7V15ZM5 6.00001H7V4.00001H5V6.00001Z" fill="#61dafb" />
                </svg>    Certificates </h3>
              </div>
              <div className='tab-body'>
                <div className='tab-one d-flex justify-space-between btn-p-0'>
                  <div className='t-icon'>
                    <span>1</span>
                  </div>
                  <div className='t-content'>
                    <h4>PHP</h4>
                    <h5>TOPS Technologies</h5>
                  </div>
                  <div className='t-btn'>
                    {/* <span className='primary-btn'>2015-19</span> */}
                  </div>
                </div>
              </div>
              <div className='tab-body'>
                <div className='tab-one d-flex justify-space-between btn-p-0 '>
                  <div className='t-icon'>
                    <span>2</span>
                  </div>
                  <div className='t-content'>
                    <h4>DCA</h4>
                    <h5>Shree Sahjanand Computer Center</h5>
                  </div>
                  <div className='t-btn'>
                    {/* <span className='primary-btn'>2015-19</span> */}
                  </div>
                </div>
              </div>
              <div className='tab-body'>
                <div className='tab-one d-flex justify-space-between btn-p-0'>
                  <div className='t-icon'>
                    <span>3</span>
                  </div>
                  <div className='t-content'>
                    <h4>Tally 9</h4>
                    <h5>Soni Academy Computer Training & Computer Education</h5>
                  </div>
                  <div className='t-btn'>
                    {/* <span className='primary-btn'>2015-19</span> */}
                  </div>
                </div>
              </div>
            </section>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <section className='tab-width'>
              <div className='tab-title '>
                <h3 className='d-flex align-item-center'> <ExtensionIcon></ExtensionIcon>    Extensions </h3>
              </div>
              <div className='tab-body'>
                <div className='tab-one d-flex justify-space-between btn-p fd-un'>
                  <div className='t-icon'>
                    <span>1</span>
                  </div>
                  <div className='t-content witout-yr'>
                    <h4>PerfectPixel</h4>
                  </div>
                </div>
              </div>
              <div className='tab-body'>
                <div className='tab-one d-flex justify-space-between btn-p fd-un'>
                  <div className='t-icon'>
                    <span>2</span>
                  </div>
                  <div className='t-content witout-yr'>
                    <h4>Width and Height Display</h4>
                  </div>
                </div>
              </div>
              <div className='tab-body'>
                <div className='tab-one d-flex justify-space-between btn-p fd-un'>
                  <div className='t-icon'>
                    <span>3</span>
                  </div>
                  <div className='t-content witout-yr'>
                    <h4>React Developer Tools</h4>
                  </div>
                </div>
              </div>
              <div className='tab-body'>
                <div className='tab-one d-flex justify-space-between btn-p fd-un'>
                  <div className='t-icon'>
                    <span>4</span>
                  </div>
                  <div className='t-content witout-yr'>
                    <h4>SetupVPN</h4>
                  </div>
                </div>
              </div>
              <div className='tab-body'>
                <div className='tab-one d-flex justify-space-between btn-p fd-un'>
                  <div className='t-icon'>
                    <span>5</span>
                  </div>
                  <div className='t-content witout-yr'>
                    <h4>Lightshot</h4>
                  </div>
                </div>
              </div>
              <div className='tab-body'>
                <div className='tab-one d-flex justify-space-between btn-p fd-un'>
                  <div className='t-icon'>
                    <span>6</span>
                  </div>
                  <div className='t-content witout-yr'>
                    <h4>Screencastify - Screen Video Recorder</h4>
                  </div>
                </div>
              </div>
              <div className='tab-body'>
                <div className='tab-one d-flex justify-space-between btn-p fd-un'>
                  <div className='t-icon'>
                    <span>7</span>
                  </div>
                  <div className='t-content witout-yr'>
                    <h4>Nimbus</h4>
                  </div>
                </div>
              </div>
              <div className='tab-body'>
                <div className='tab-one d-flex justify-space-between btn-p fd-un'>
                  <div className='t-icon'>
                    <span>8</span>
                  </div>
                  <div className='t-content witout-yr'>
                    <h4>Dimensions </h4>
                  </div>
                </div>
              </div>
            </section>
          </TabPanel>
          <TabPanel value={value} index={5}>
            <section className='tab-width'>
              <div className='tab-title '>
                <h3 className='d-flex align-item-center'> <LanguageIcon></LanguageIcon>    Languages </h3>
              </div>
              <div className='tab-body'>
                <div className='tab-one d-flex justify-space-between btn-p fd-un'>
                  <div className='t-icon'>
                    <span>1</span>
                  </div>
                  <div className='t-content witout-yr'>
                    <h4>Gujarati</h4>
                  </div>
                </div>
              </div>
              <div className='tab-body'>
                <div className='tab-one d-flex justify-space-between btn-p fd-un'>
                  <div className='t-icon'>
                    <span>2</span>
                  </div>
                  <div className='t-content witout-yr'>
                    <h4>English</h4>
                  </div>
                </div>
              </div>
              <div className='tab-body'>
                <div className='tab-one d-flex justify-space-between btn-p fd-un'>
                  <div className='t-icon'>
                    <span>3</span>
                  </div>
                  <div className='t-content witout-yr'>
                    <h4>Hindi</h4>
                  </div>
                </div>
              </div>
            </section>
          </TabPanel>
          <TabPanel value={value} index={6}>
            <section className='tab-width'>
              <div className='tab-title '>
                <h3 className='d-flex align-item-center'> <InterestsIcon></InterestsIcon>  Interests </h3>
              </div>
              <div className='tab-body'>
                <div className='tab-one d-flex justify-space-between btn-p fd-un'>
                  <div className='t-icon'>
                    <span><CodeIcon></CodeIcon></span>

                  </div>
                  <div className='t-content witout-yr'>
                    <h4>Programming</h4>
                  </div>
                </div>
              </div>
              <div className='tab-body'>
                <div className='tab-one d-flex justify-space-between btn-p fd-un'>
                  <div className='t-icon'>
                    <span><SportsCricketIcon></SportsCricketIcon></span>
                  </div>
                  <div className='t-content witout-yr'>
                    <h4>Cricket</h4>
                  </div>
                </div>
              </div>
              <div className='tab-body'>
                <div className='tab-one d-flex justify-space-between btn-p fd-un'>
                  <div className='t-icon'>
                    <span><LocalAirportIcon></LocalAirportIcon></span>
                  </div>
                  <div className='t-content witout-yr'>
                    <h4>Travelling</h4>
                  </div>
                </div>
              </div>
              <div className='tab-body'>
                <div className='tab-one d-flex justify-space-between btn-p fd-un'>
                  <div className='t-icon'>
                    <span><DesignServicesIcon></DesignServicesIcon></span>
                  </div>
                  <div className='t-content witout-yr'>
                    <h4>Designing</h4>
                  </div>
                </div>
              </div>
              <div className='tab-body'>
                <div className='tab-one d-flex justify-space-between btn-p fd-un'>
                  <div className='t-icon'>
                    <span><NetworkCheckIcon></NetworkCheckIcon></span>
                  </div>
                  <div className='t-content witout-yr'>
                    <h4>Internet surfing</h4>
                  </div>
                </div>
              </div>
              <div className='tab-body'>
                <div className='tab-one d-flex justify-space-between btn-p fd-un'>
                  <div className='t-icon'>
                    <span><BrushIcon></BrushIcon></span>
                  </div>
                  <div className='t-content witout-yr'>
                    <h4>Painting</h4>
                  </div>
                </div>
              </div>
              <div className='tab-body'>
                <div className='tab-one d-flex justify-space-between btn-p fd-un'>
                  <div className='t-icon'>
                    <span><AutoStoriesIcon></AutoStoriesIcon></span>
                  </div>
                  <div className='t-content witout-yr'>
                    <h4>Reading books</h4>
                  </div>
                </div>
              </div>
            </section>
          </TabPanel>

        </Box>

      </div>
    </section>
  );
}
