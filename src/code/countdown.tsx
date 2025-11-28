"use client";

import { useEffect, useState } from "react";

interface CountdownProps {
    target: Date | string;
}

export default function Countdown({ target }: CountdownProps) {
    const targetDate = typeof target === "string" ? new Date(target) : target;

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const update = () => {
            const now = new Date().getTime();
            const diff = targetDate.getTime() - now;

            if (diff <= 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);

            setTimeLeft({ days, hours, minutes, seconds });
        };

        update(); // update immediately when mounted
        const interval = setInterval(update, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <span>
      {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
    </span>
    );
}
