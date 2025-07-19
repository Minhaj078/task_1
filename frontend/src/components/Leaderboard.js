import React from 'react';
import '../styles/Leaderboard.css'; // Create this CSS file for glassmorphism

function Leaderboard({ leaderboard }) {
    return (
        <div className="leaderboard-container glassmorphism-card">
            <h2>Leaderboard</h2>
            {leaderboard.length === 0 ? (
                <p>No users on the leaderboard yet.</p>
            ) : (
                <ul className="leaderboard-list">
                    {leaderboard.map((user) => (
                        <li key={user._id} className="leaderboard-item">
                            <span className="rank">{user.rank}.</span>
                            <span className="name">{user.name}</span>
                            <span className="points">{user.totalPoints} points</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Leaderboard;