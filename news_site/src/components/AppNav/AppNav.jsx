import sections from "/Users/destinroyer/Code/CP_Work/Week_8/Day_1/react-news-i/news_site/src/data/sections.json"
import Nav from 'react-bootstrap/Nav';

export default function AppNav(){

    return(
        <div>
            <Nav>
                {sections.map(section => {
                    return <Nav.Item key={section.label}>
                        <Nav.Link key={section.label} onClick={()=> alert('You have clicked '+ section.label)}>
                          {section.label}  
                          </Nav.Link>
                        </Nav.Item>
                }) }
            
            </Nav>
        </div>
    )
}

