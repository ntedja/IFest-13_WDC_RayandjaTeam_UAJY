import React from "react";
import { Link } from "react-router-dom";

const ProfileLayout = ({ userData }) => {
  const { name = "", phone = "", email = "" } = userData || {};

  return (
    <div style={styles.profileContainer}>
      {/* Main Profile Content */}
      <div style={styles.mainContent}>
        <div style={styles.profileCard}>
          {/* Profile Header */}
          <div style={styles.profileHeader}>
            <div style={styles.profileImageContainer}>
              {/* Placeholder profile image */}
              <div style={styles.profileImagePlaceholder}>
                {name ? name.charAt(0).toUpperCase() : "U"}
              </div>
            </div>
            <div style={styles.profileInfo}>
              <h1 style={styles.profileName}>{name || "Ryan Tejo Bagas"}</h1>
              <p style={styles.profileTitle}>Account Member</p>
              <div style={styles.rating}>
                <span style={styles.ratingNumber}>5.0</span>
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    style={styles.starIcon}
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </div>
            <div style={styles.actionButtons}>
              <Link style={styles.messageButton}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  style={styles.buttonIcon}
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                Send Feedback
              </Link>
              <Link to="/profile" style={styles.contactButton}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  style={styles.buttonIcon}
                >
                  <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <line x1="20" y1="8" x2="20" y2="14" />
                  <line x1="23" y1="11" x2="17" y2="11" />
                </svg>
                Account Settings
              </Link>
            </div>
          </div>

          {/* Tabs */}
          <div style={styles.tabs}>
            <div style={{ ...styles.tab, ...styles.activeTab }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                style={styles.tabIcon}
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
              About
            </div>
            <div style={styles.tab}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                style={styles.tabIcon}
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Address
            </div>
          </div>

          {/* Contact Information Section */}
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>CONTACT INFORMATION</h3>

            <div style={styles.infoItem}>
              <div style={styles.infoLabel}>Phone:</div>
              <div style={styles.infoValue}>{phone || "+81 9235 23235"}</div>
            </div>

            <div style={styles.infoItem}>
              <div style={styles.infoLabel}>Email:</div>
              <div style={styles.infoValue}>
                {email || "ryanbagastejo@yahoo.com"}
              </div>
            </div>

            <div style={styles.infoItem}>
              <div style={styles.infoLabel}>Password:</div>
              <div style={styles.infoValue}>{email || "***********"}</div>
            </div>
          </div>

          {/* Basic Information Section */}
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>BASIC INFORMATION</h3>

            <div style={styles.infoItem}>
              <div style={styles.infoLabel}>Birthday:</div>
              <div style={styles.infoValue}>August 24, 2003</div>
            </div>

            <div style={styles.infoItem}>
              <div style={styles.infoLabel}>Gender:</div>
              <div style={styles.infoValue}>Male</div>
            </div>
          </div>

          {/* Skills Section */}
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>Address</h3>

            <div style={styles.infoItem}>
              <div style={styles.infoLabel}>Address Line 1:</div>
              <div style={styles.infoValue}>
                Jl. Magelang No. 117, Yogyakarta
              </div>
            </div>

            <div style={styles.infoItem}>
              <div style={styles.infoLabel}>Address Line 2:</div>
              <div style={styles.infoValue}>-</div>
            </div>

            <div style={styles.infoItem}>
              <div style={styles.infoLabel}>City:</div>
              <div style={styles.infoValue}>Sleman</div>
            </div>

            <div style={styles.infoItem}>
              <div style={styles.infoLabel}>Province/State:</div>
              <div style={styles.infoValue}>Special Region Yogyakarta</div>
            </div>

            <div style={styles.infoItem}>
              <div style={styles.infoLabel}>Country:</div>
              <div style={styles.infoValue}>Indonesia</div>
            </div>

            <div style={styles.infoItem}>
              <div style={styles.infoLabel}>Postal/ZIP Code:</div>
              <div style={styles.infoValue}>54795</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  profileContainer: {
    display: "flex",
    backgroundColor: "#f5f5f5",
    fontFamily: "Arial, sans-serif",
    minHeight: "calc(100vh - 80px)",
    marginTop: "80px",
    position: "relative",
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
    height: "fit-content",
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
    padding: "20px",
    display: "flex",
    justifyContent: "center",
  },

  profileCard: {
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "800px",
    overflow: "hidden",
  },

  profileHeader: {
    display: "flex",
    padding: "20px",
    borderBottom: "1px solid #eee",
    flexWrap: "wrap",
  },

  profileImageContainer: {
    marginRight: "20px",
  },

  profileImagePlaceholder: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    backgroundColor: "#2196F3",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "48px",
    color: "white",
    fontWeight: "bold",
  },

  profileInfo: {
    flex: "1",
    minWidth: "200px",
  },

  profileName: {
    margin: "0 0 5px 0",
    fontSize: "24px",
    color: "#333",
  },

  profileTitle: {
    margin: "0 0 10px 0",
    color: "#666",
    fontSize: "16px",
  },

  rating: {
    display: "flex",
    alignItems: "center",
  },

  ratingNumber: {
    fontWeight: "bold",
    marginRight: "10px",
  },

  starIcon: {
    width: "18px",
    height: "18px",
    color: "#FFD700",
    marginRight: "3px",
  },

  actionButtons: {
    display: "flex",
    marginTop: "20px",
    flexWrap: "wrap",
    gap: "10px",
  },

  messageButton: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#A27B5C",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
  },

  contactButton: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#A27B5C",
    color: "#ffffff",
    border: "none",
    padding: "10px 15px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
  },

  buttonIcon: {
    width: "16px",
    height: "16px",
    marginRight: "8px",
  },

  tabs: {
    display: "flex",
    borderBottom: "1px solid #eee",
  },

  tab: {
    display: "flex",
    alignItems: "center",
    padding: "15px 20px",
    color: "#666",
    cursor: "pointer",
    borderBottom: "3px solid transparent",
  },

  activeTab: {
    color: "#A27B5C",
    borderBottom: "3px solid #A27B5C",
    fontWeight: "500",
  },

  tabIcon: {
    width: "16px",
    height: "16px",
    marginRight: "8px",
  },

  section: {
    padding: "20px",
    borderBottom: "1px solid #eee",
  },

  sectionTitle: {
    fontSize: "14px",
    color: "#666",
    margin: "0 0 15px 0",
    fontWeight: "500",
  },

  infoItem: {
    display: "flex",
    marginBottom: "10px",
    fontSize: "14px",
  },

  infoLabel: {
    width: "120px",
    color: "#666",
    fontWeight: "500",
  },

  infoValue: {
    color: "#333",
    flex: "1",
  },

  skillsList: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },

  skillTag: {
    backgroundColor: "#F5F5F5",
    padding: "5px 10px",
    borderRadius: "4px",
    fontSize: "14px",
    color: "#333",
  },
};

export default ProfileLayout;