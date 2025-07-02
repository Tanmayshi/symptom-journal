
const GradientShadowButton = ({ name }) => {
  // Inline styles for base properties that DO NOT change on hover
  const buttonBaseStaticStyle = {
    padding: '10px 31px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1.1em',
    fontWeight: 'bold',
    color: '#E0E0E0', // Light text color for dark theme
    position: 'relative',
    overflow: 'hidden',

    // Smooth transitions for properties that will change via CSS
    transition: 'background 0.4s ease, box-shadow 0.4s ease, transform 0.2s ease, border-color 0.4s ease',
    // Added border-color to transition for smoothness
  };

  // CSS rules for default state, hover state, and active state.
  const dynamicStyles = `
    /* Base Button Styling - Subtle/Grayscale by default */
    .gradient-shadow-button-dynamic {
        background:slate-900; /* A dark, solid background for default state */
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2), 0 0 0 0 rgba(0, 0, 0, 0.1); /* Lighter shadow */
        border: 1px solid #FFFFFF; /* White border for the non-hover state */
    }

    /* Hover State: Apply colorful gradient, stronger shadow, and remove border */
    .gradient-shadow-button-dynamic:hover {
        background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%); /* Colorful gradient on hover */
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6), 0 0 0 0 rgba(0, 0, 0, 0.3); /* Stronger shadow on hover */
        transform: translateY(-2px); /* Slight lift effect */
        border: 2px solid transparent; /* Make border transparent on hover to create a seamless look */
    }

    /* Active State: When clicked/pressed */
    .gradient-shadow-button-dynamic:active {
        transform: translateY(0); /* Return to original position */
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3), 0 0 0 0 rgba(0, 0, 0, 0.1); /* Softer shadow */
        border: 2px solid transparent; /* Keep transparent or adjust as needed for click state */
    }
  `;

  return (
    <>
      <style>{dynamicStyles}</style>

      <button
        className="gradient-shadow-button-dynamic"
        style={buttonBaseStaticStyle}
      >
        {name}
      </button>
    </>
  );
};

export default GradientShadowButton;