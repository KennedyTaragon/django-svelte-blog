from django.contrib import admin
from unfold.admin import ModelAdmin
from .models import Post


@admin.register(Post)
class PostAdmin(ModelAdmin):
    list_display = ("title", "author", "created_at", "updated_at")
    list_filter = ("author", "created_at")
    search_fields = ("title", "body", "author__username")
    ordering = ("-created_at",)
    readonly_fields = ("created_at", "updated_at")

    fieldsets = (
        ("Post Info", {
            "fields": ("title", "body")
        }),
        ("Author & Timestamps", {
            "fields": ("author", "created_at", "updated_at"),
            "classes": ("collapse",),
        }),
    )
