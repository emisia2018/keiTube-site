// pages/thanks.js
import React from 'react';
import Link from 'next/link';

const ThanksPage = () => {
  return (
    <div>
      <h1>Thank You</h1>
      <p>Your reservation has been completed.</p>
      <p>I look forward to speaking with you!</p> {/* ← ここに追加 */}
      <p>
        <Link href="/" legacyBehavior>
          <a>Back to Top Page</a>
        </Link>
      </p>
    </div>
  );
};

export default ThanksPage;
