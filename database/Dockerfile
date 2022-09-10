from mysql

workdir /database
COPY ./ModeloEntidadeRelacional/netflix.sql ./docker-entrypoint-initdb.d
ADD ./ModeloEntidadeRelacional/netflix.sql /docker-entrypoint-initdb.d

EXPOSE 3306
