# 主键自增长

 在MongoDB里必须有一个固定的主键_id,如果不指定是由MongoDB生成的一个ObjectID，该ObjectID在需要MongoDB集群时是必须的.

但是我们系统是面向中小系统，无需考虑集群，所以新增的记录，如果没有_id,会自动设置一个自动增长的字符类型的数字，从1开始

如果需要设定一个自己定义的_id,可以通过[后端元配置文件的](/guide/smetaconfig.html)beforeAdd来实现