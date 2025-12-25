# DROP ROLE

## 功能说明

删除数据库角色时，角色删除操作执行后，其拥有的所有权限将被同步回收，且这些权限会从已被授予该角色的用户或其他角色上一并撤销；若该角色不存在，系统会抛出错误提示。

## 使用须知

-- 执行本语句的用户需满足以下任一权限条件：拥有 DROP ANY ROLE 系统权限；为该角色的创建者；被授予该角色且该授权附带 WITH ADMIN OPTION 属性。
-- 由系统用户创建的角色，仅系统用户具备删除该角色的权限。
-- 待删除的角色名称必须存在于数据库中，否则操作将触发错误提示。
-- 该操作不支持在数据库重启并执行回滚的过程中进行。

## 语法结构

DROP ROLE role_name

### 参数解释

role_name：角色名称。

## 样例

--创建角色role_explorer。

CREATE ROLE role_explorer;

--删除角色role_explorer。

DROP ROLE role_explorer;