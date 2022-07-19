import styles from '../../styles/About.module.css'

//Timeline Components 
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function MobileTimeline() {
    return (
        <Timeline>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot sx={{backgroundColor: '#fff', borderWidth: '10px'}}/>
                    <TimelineConnector sx={{backgroundColor: '#fff'}}/>
                </TimelineSeparator>
                <TimelineContent>
                    <div className={styles.timelineRight}>
                        <h3>Idea Conceptualised:</h3>
                        <p>
                            Both sharing the importance of quality care outcomes long-time friends, Guy, &amp; Michael,  
                            used their own expertise to create NDIS specific training content, focused on the care and 
                            support of learning fundamentals, for NDIS providers and workers.
                        </p>
                    </div>
                    <div className={styles.timelineRight}>
                        <p>
                            As a primary carer for his brother, Guy learned early about the amount of knowledge, complexities 
                            and skills required to truly support a client of NDIS&apos;s well-being. After working in the industry,
                            guy recognised support worker training deserves immediate attention and is on a mission for providing 
                            effective training and carer outcomes within the NDIS.
                        </p>
                        <p className={styles.founder}>Founder Guy</p>
                    </div>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot sx={{backgroundColor: '#fff', borderWidth: '10px'}}/>
                    <TimelineConnector sx={{backgroundColor: '#fff'}}/>
                </TimelineSeparator>
                <TimelineContent>
                    <div className={styles.timelineRight}>
                        <h3>Early Development:</h3>
                        <p>
                            Friends in the industry, Guy &amp; Michael began collaborating on the development of 
                            DSTA&apos;s online training platform and Accreditation program. The program focused 
                            heavily on &amp; the creation of new support worker care criteria. Through highly engaging 
                            learning that supports certification and assessment, aiming to reduce worker and carer related incidents..
                        </p>
                    </div>
                    <div className={styles.timelineRight}>
                        <p>
                            During Michaels&apos;s time working as NDIS training manager, Michael always saw what needed improvement. His 
                            personal drive to provide universal, high-quality care to NDIS participants drove him to start DTSA. 
                            Michael has worked hard investing his knowledge to create a trusted training program solution to support 
                            NDIS providers&apos; &amp; carers&apos; learning and development.
                        </p>
                        <p className={styles.founder}>Founder Michael</p>
                    </div>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot sx={{backgroundColor: '#fff', borderWidth: '10px'}}/>
                    <TimelineConnector sx={{backgroundColor: '#fff'}}/>
                </TimelineSeparator>
                <TimelineContent>
                    <div className={styles.timelineRight}>
                        <h3>Late-Stage:</h3>
                        <p>
                            Inspired by WFH practice during Covid-19, DSTA set out to unlock the true learning &amp; development 
                            potential of NDIS workers&apos; by implementing their innovative Online LMS Platform, primarily 
                            focusing on providing workers with a set variety of blended learning experiences and highly relevant 
                            reporting and engagement tools. 
                        </p>
                    </div>
                    <div className={styles.timelineRight}>
                        <p>
                            Joining the team later in development - Justin has become a key developer for growth in DTSA&apos;s journey.
                        </p>
                        <p className={styles.founder}>Partner Justin</p>
                    </div>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot sx={{backgroundColor: '#fff', borderWidth: '10px'}}/>
                </TimelineSeparator>
                <TimelineContent>
                    <h3>2022, Ready for launch! 🚀</h3>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    )

};