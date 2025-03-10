import React, { useState } from "react";
import { Link } from "react-router-dom";

const Address = () => {
  const [addressData, setAddressData] = useState({
    addressLine1: "",
    addressLine2: "",
    city: "",
    province: "",
    postalCode: "",
    country: "",
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddressData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Address form submitted:", addressData);

    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <div style={styles.ProfileContainer}>
      {/* Success Alert */}
      {showAlert && (
        <div style={styles.alert}>
          <div style={styles.alertContent}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={styles.alertIcon}
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span>Save Success!</span>
          </div>
        </div>
      )}

      {/* Sidebar Navigation */}
      <div style={styles.sidebar}>
        <h3 style={styles.sidebarTitle}>Account Settings</h3>
        <Link to="/profile" style={styles.navLink}>
          <div style={styles.sidebarItem}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={styles.icon}
            >
              <path d="M9 17h6M9 12h6M9 7h6M4 22h16a2 2 0 002-2V4a2 2 0 00-2-2H4a2 2 0 00-2 2v16a2 2 0 002 2z" />
            </svg>
            <span>My Profile</span>
          </div>
        </Link>
        <Link to="/address" style={styles.navLink}>
          <div style={{ ...styles.sidebarItem, ...styles.activeItem }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={styles.icon}
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span>Address</span>
          </div>
        </Link>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        <div style={styles.addressSection}>
          <h2 style={styles.sectionTitle}>Address Information</h2>
          <form onSubmit={handleSubmit} style={styles.formContainer}>
            <div style={styles.formGroupFullWidth}>
              <label htmlFor="addressLine1" style={styles.label}>
                Address Line 1 *
              </label>
              <input
                type="text"
                id="addressLine1"
                name="addressLine1"
                value={addressData.addressLine1}
                onChange={handleChange}
                required
                style={styles.input}
                placeholder="Street address, P.O. box, company name"
              />
            </div>
            <div style={styles.formGroupFullWidth}>
              <label htmlFor="addressLine2" style={styles.label}>
                Address Line 2
              </label>
              <input
                type="text"
                id="addressLine2"
                name="addressLine2"
                value={addressData.addressLine2}
                onChange={handleChange}
                style={styles.input}
                placeholder="Apartment, suite, unit, building, floor, etc."
              />
            </div>
            <div style={styles.formRow}>
              <div style={styles.formGroup}>
                <label htmlFor="city" style={styles.label}>
                  City *
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={addressData.city}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />
              </div>
              <div style={styles.formGroup}>
                <label htmlFor="province" style={styles.label}>
                  Province/State *
                </label>
                <input
                  type="text"
                  id="province"
                  name="province"
                  value={addressData.province}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />
              </div>
            </div>
            <div style={styles.formRow}>
              <div style={styles.formGroup}>
                <label htmlFor="postalCode" style={styles.label}>
                  Postal/ZIP Code *
                </label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={addressData.postalCode}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />
              </div>
              <div style={styles.formGroup}>
                <label htmlFor="country" style={styles.label}>
                  Country *
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={addressData.country}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />
              </div>
            </div>
            <div style={styles.formActions}>
              <button type="submit" style={styles.saveButton}>
                Save Address
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const styles = {
  ProfileContainer: {
    display: "flex",
    backgroundColor: "#f5f5f5",
    fontFamily: "Arial, sans-serif",
    minHeight: "calc(100vh - 80px)", 
    marginTop: "80px", 
    position: "relative",
  },

  alert: {
    position: "fixed",
    top: "90px", 
    right: "20px",
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 15px",
    borderRadius: "4px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    zIndex: 1000,
    animation: "fadeIn 0.3s, fadeOut 0.3s 2.7s",
  },

  alertContent: {
    display: "flex",
    alignItems: "center",
  },

  alertIcon: {
    width: "20px",
    height: "20px",
    marginRight: "10px",
  },

  sidebar: {
    width: "250px",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    margin: "10px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    position: "sticky",
    top: "90px", 
  },

  sidebarTitle: {
    fontSize: "18px",
    fontWeight: "500",
    color: "#333",
    marginBottom: "15px",
    paddingBottom: "10px",
    borderBottom: "1px solid #eee",
  },

  sidebarItem: {
    display: "flex",
    alignItems: "center",
    padding: "12px 15px",
    marginBottom: "10px",
    borderRadius: "6px",
    cursor: "pointer",
    color: "#555",
    transition: "background-color 0.2s",
  },

  activeItem: {
    backgroundColor: "#f0e6df",
    color: "#A27B5C",
    fontWeight: "500",
  },

  navLink: {
    textDecoration: "none",
    color: "inherit",
    display: "block",
  },

  icon: {
    width: "20px",
    height: "20px",
    marginRight: "12px",
  },

  mainContent: {
    flex: "1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center", 
    minHeight: "calc(100vh - 100px)", 
  },

  addressSection: {
    backgroundColor: "white",
    borderRadius: "8px",
    padding: "25px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    maxWidth: "650px",
    width: "100%",
    margin: "auto", 
  },

  formContainer: {
    width: "100%",
    maxWidth: "600px",
    margin: "0 auto",
  },

  sectionTitle: {
    color: "#A27B5C",
    fontSize: "24px",
    fontWeight: "normal",
    textAlign: "center",
    marginTop: "0",
    marginBottom: "30px",
  },

  formRow: {
    display: "flex",
    gap: "20px",
    marginBottom: "25px",
    flexWrap: "wrap", 
  },

  formGroup: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    minWidth: "250px", 
  },

  formGroupFullWidth: {
    width: "100%",
    marginBottom: "25px",
    display: "flex",
    flexDirection: "column",
  },

  label: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "8px",
  },

  input: {
    padding: "10px",
    border: "1px solid #e0e0e0",
    borderRadius: "4px",
    fontSize: "16px",
    height: "40px",
  },

  formActions: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "20px",
  },

  saveButton: {
    backgroundColor: "#A27B5C",
    color: "white",
    border: "none",
    padding: "12px 30px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.2s",
  },
};

export default Address;