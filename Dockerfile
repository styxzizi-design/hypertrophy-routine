# ── 빌드: nginx 기반 정적 파일 서빙 ────────────────────────────────────────────
FROM nginx:alpine

# 정적 파일 복사
COPY index.html  /usr/share/nginx/html/
COPY style.css   /usr/share/nginx/html/
COPY script.js   /usr/share/nginx/html/

# nginx 설정 복사
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Cloud Run은 8080 포트 사용
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
