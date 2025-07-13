const style = {
  topBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2AA7FF",
    color: "white",
  },
  topBarText: {
    margin: 0,
    padding: "6px",
    fontSize: "14px",
  },
};
export const TopBar = () => {
  return (
    <div style={style.topBar}>
      <p style={style.topBarText}>
        The health and well-being of our patients and their health care team
        will always be our priority, so we follow the best practices for
        cleanliness.
      </p>
    </div>
  );
};
