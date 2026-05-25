// IAC trigger — public S3 + open SG + no encryption
resource "aws_s3_bucket" "public_data" {
  bucket = "v29-validation-public-data"
  acl    = "public-read-write"
}

resource "aws_security_group" "wide_open" {
  name = "v29-wide-open"
  ingress {
    from_port   = 0
    to_port     = 65535
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_db_instance" "no_encryption" {
  identifier        = "v29-noenc-db"
  engine            = "mysql"
  instance_class    = "db.t2.micro"
  allocated_storage = 5
  storage_encrypted = false
  publicly_accessible = true
  username = "admin"
  password = "Sup3rSecret123!"
}
