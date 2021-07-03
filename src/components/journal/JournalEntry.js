import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div className="journal__entry-pictures"
            style={{
                backgroundSize : 'cover',
                backgroundImage : 'url(https://static1.millenium.gg/articles/9/22/20/9/@/103617-victorialolbien1-article_m-1.jpg)'
                
            }}>
                
            </div>
            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo Dia</p>
                    <p className="journal__entry-content">
                       Repreehendr it in duis consetur 
                    </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
            
        </div>
    )
}
