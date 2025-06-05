# Environment Specification for Microservices Deployment

## Deployment Environment
- **Platform**: AWS EC2 (Ubuntu 22.04 LTS)
- **Instance Type**: t2.micro / t3.medium
- **Storage**: 30 GB General Purpose SSD (gp3)
- **Architecture**: 64-bit x86

## Networking
- **VPC**: Default VPC
- **Subnet**: Public
- **Internet Access**: Enabled via Internet Gateway
- **Security Group Rules**:
  - Port 22: SSH (restricted to my IP)
  - Port 3000: User Service (open)
  - Port 3001: Product Service (open)
  - Port 3003: Gateway Service (open)
  - Port 4000: Auth Service (open)
  - Port 27017: MongoDB (open/test)

## Installed Tools
- **Docker**: v24+
- **Docker Compose**: v2+
- **Git**: latest
- **Node.js/NPM**: Installed per service requirements

## Additional Notes
- MongoDB uses Docker volume for persistence.
- All services are containerized and orchestrated using Docker Compose.
- Internal microservice communication uses container names for DNS resolution.


