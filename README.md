# Thinkphp Generator | Thinkphp 生成器

> 利用yeoman自动构建thinkphp应用 - 通过命令行自动创建应用以及 Controller/Model/View.

[English Doc](/README_en.md)

## 使用方法

安装 `Composer` [关于 composer](https://getcomposer.org/)
```
curl -sS https://getcomposer.org/installer | php
mv composer.phar /usr/local/bin/composer
```


安装 `yo` and `generator-thinkphp` [关于 Yeoman](http://yeoman.io/)
```
npm install -g yo generator-thinkphp
```

`cd` 进入到你的工作文件夹以进行下一步操作:
```
cd [workPlace]
```
**`workPlace`是指你平时写代码的文件夹**

输入 `yo thinkphp` 来生成应用，根据指引输入，你可以自定义应用名称，如果你未安装 `Composer` 会有安装提示是否自动安装:
```
yo thinkphp
```

输入 `cd [appName]` 进入你的应用目录，开始一下步操作:
```
cd [appName]
```
**`appName`是指你自定义应用的名称**

## 自动生成器

已支持的生成器:

* [thinkphp](#app) (aka [thinkphp:app](#app))
* [thinkphp:controller](#controller)
* [thinkphp:model](#model)
* [thinkphp:space](#space)
* [thinkphp:serve](#serve)

### App

创建新的 [ThinkPHP](https://github.com/liu21st/thinkphp) 应用并使用 [Composer](https://getcomposer.org/).

Example:
```bash
yo thinkphp
```

### Controller

为你的应用自动生成新的Controller. 例如 `yo thinkphp:controller [classedName] [spaceName]`.

**`classedName` 为必选项，不能为空.**

**`spaceName` 默认为 `Home` ，可选项.**

Example:
```bash
yo thinkphp:controller Index Home
```

此命令生成 `Application/Home/Controller/IndexController.class.php`:
```php
<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {

    public function index(){
    	//
        $this->display();
    }

}
```

以及 `Application/Home/View/Index/index.html`:

```html
<extend name="base" />
<block name="content">
	<h1>Index</h1>
</block>
```

以及 `Application/Home/View/Index/base.html`:

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>Home</title>
<meta name="description" content="">
<meta name="keywords" content="">
<link href="" rel="stylesheet">
</head>
<body>
    <block name="content"></block>
</body>
</html>
```

### Model

和Controller命令基本一样, 为你的应用自动生成新的Model.

Example:
```bash
yo thinkphp:model User Home
```

生成 `Application/Home/Model/UserModel.class.php`:
```php
<?php
namespace Home\Model;
use Think\Model;
class UserModel extends Model {
	//
    protected $tableName = 'User';

}
```

### Space

为你的应用生成新的命名空间. ***命名空间是指thinkphp应用中例如Home/Admin等文件夹***

Example:
```bash
yo thinkphp:space Admin
```

生成 `Application/Admin` 文件夹以及初始内容.

* Admin
	* Common
	* Conf
	* Controller
	* Model
	* View
	* index.html


### Serve

运行本地的php测试服务器，此功能例如php自带的测试服务器实现.

Example:
```bash
yo thinkphp:serve
```

你的测试服务器运行在 127.0.0.1:3000.

## 关于

Thinkphp的命令行自动构建工具，类似 [Laravel](http://laravel.com) 的 `php artisan`

## 许可证

[MIT](/LICENSE)
