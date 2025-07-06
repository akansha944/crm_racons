function Topbar() {
  return (
    <div style={{
      height: '60px',
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #e0e0e0',
      padding: '0 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      zIndex: 10
    }}>
      <input
        type="text"
        placeholder="Search..."
        style={{
          padding: '8px 12px',
          width: '300px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          fontSize: '14px'
        }}
      />
      {/* Optional: Add profile picture or buttons on the right side */}
    </div>
  );
}

export default Topbar;
