import { useEffect, useState } from 'react';

export function Greeting() {
    const [greeting, setGreeting] = useState(null);
    const [showAlert, setShowAlert] = useState(false); // To control if alert is visible
    const [alertMessage, setAlertMessage] = useState(''); // Message for each day

    useEffect(() => {
        // Set the initial greeting
        fetch('/api/greeting')
            .then((res) => res.json())
            .then((data) => setGreeting(data.greeting));

        // Function to display day-wise messages
        let day = 1;
        const interval = setInterval(() => {
            if (day <= 5) {
                setAlertMessage(This is Day ${day});
                setShowAlert(true);
                day++;
            } else {
                clearInterval(interval); // Stop after Day 5
            }
        }, 5000); // Display a new message every 5 seconds

        // Cleanup the interval when the component unmounts
        return () => clearInterval(interval);
    }, []);

    if (!greeting) return null;

    return (
        <div>
            {showAlert && (
                <div style={{ backgroundColor: 'yellow', padding: '10px', textAlign: 'center' }}>
                    {alertMessage}
                </div>
            )}
            <h1 className="text-center mb-5">{greeting}</h1>
        </div>
    );
}