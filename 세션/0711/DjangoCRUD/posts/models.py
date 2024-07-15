from django.db import models

class Post(models.Model): #Post가 models 상속받음
    title = models.CharField(max_length=32)
    user = models.CharField(max_length=20)
    content = models.TextField() # 최대 길이 안 정해도 됨

class Comment(models.Model):
    post=models.ForeignKey(Post, on_delete=models.CASCADE)
    content=models.TextField()