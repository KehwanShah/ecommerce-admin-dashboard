-- Create database schema for project
CREATE DATABASE IF NOT EXISTS EnterpriseDB;
USE EnterpriseDB;

-- Users Table
CREATE TABLE Users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Orders Table connected to Users
CREATE TABLE Orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    amount DECIMAL(10, 2) NOT NULL,
    status ENUM('Completed', 'Processing', 'Failed') DEFAULT 'Processing',
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
);

-- Optimized SQL Query for Portfolio Showcase
SELECT 
    o.order_id,
    u.full_name AS customer_name,
    o.amount,
    o.status,
    o.order_date
FROM Orders o
JOIN Users u ON o.user_id = u.user_id
WHERE o.status = 'Completed'
ORDER BY o.amount DESC;