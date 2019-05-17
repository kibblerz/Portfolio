from django.db import models
from django.contrib.auth.models import User

class Friends(models.Model):
    username = models.OneToOneField(User, on_delete=models.CASCADE, related_name="Username")
    friends = models.ManyToManyField(User, related_name='friends')

class Posts(models.Model):
    Submitter = models.ForeignKey(User, on_delete=models.CASCADE, related_name='submitter')
    Content = models.TextField(max_length=1000)
    Likes = models.ManyToManyField(User, related_name='likes')
    Dislikes = models.ManyToManyField(User, related_name='dislikes')

