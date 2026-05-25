// IAC — hardened in v30 fix PR
resource "aws_s3_bucket" "private_data" {
  bucket = "v29-validation-private-data"
  acl    = "private"

  server_side_encryption_configuration {
    rule {
      apply_server_side_encryption_by_default {
        sse_algorithm = "AES256"
      }
    }
  }
  versioning { enabled = true }
}

resource "aws_security_group" "restricted" {
  name = "v29-restricted"
  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["10.0.0.0/8"]
  }
}

resource "aws_db_instance" "encrypted" {
  identifier          = "v29-enc-db"
  engine              = "mysql"
  instance_class      = "db.t2.micro"
  allocated_storage   = 5
  storage_encrypted   = true
  publicly_accessible = false
  username            = "admin"
  password            = var.db_password
}
