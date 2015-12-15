# generator-thinkphp

> Yeoman generator for ThinkPHP - Create ThinkPHP Project and generate Controller/Model/View for it.

[中文文档](/README.md)

## Usage

Install `Composer` [Read more about composer](https://getcomposer.org/)
```
curl -sS https://getcomposer.org/installer | php
mv composer.phar /usr/local/bin/composer
```


Install `yo` and `generator-thinkphp` [Read more about Yeoman](http://yeoman.io/)
```
npm install -g yo generator-thinkphp
```

Then `cd` into your workplace:
```
cd [workPlace]
```
**The `workPlace` means any folder that you would like to put your codes in.**

Run `yo thinkphp` to init your project, and follow the steps,you can name your app & install `Composer` and so on:
```
yo thinkphp
```

type `cd [appName]` get into your app and start coding:
```
cd [appName]
```
**`appName` is your custome app name**

## Generators

Available generators:

* [thinkphp](#Application) (aka [thinkphp:Application](#Application))
* [thinkphp:controller](#controller)
* [thinkphp:model](#model)
* [thinkphp:space](#space)
* [thinkphp:serve](#serve)

### App

Create a new project using [ThinkPHP](https://github.com/liu21st/thinkphp) and using [Composer](https://getcomposer.org/).

Example:
```bash
yo thinkphp
```

### Controller

Generates a controller and view for your Application. Command like `yo thinkphp:controller [classedName] [spaceName]`.

**The `classedName` is required value, without it will get error.**

**The default `spaceName` is `Home` and it's optional.**

Example:
```bash
yo thinkphp:controller Index Home
```

Produces `Application/Home/Controller/IndexController.class.php`:
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

Produces `Application/Home/View/Index/index.html`:

```html
<extend name="base" />
<block name="content">
	<h1>Index</h1>
</block>
```

Produces `Application/Home/View/Index/base.html`:

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

Much like Controller generator, it generates a plain model for your Project.

Example:
```bash
yo thinkphp:model User Home
```

Produces `Application/Home/Model/UserModel.class.php`:
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

Create a new namespace folder for you Application.

Example:
```bash
yo thinkphp:space Admin
```

Produces `Application/Admin` folder and default files in your project.

* Admin
	* Common
	* Conf
	* Controller
	* Model
	* View
	* index.html


### Serve

Run a PHP Test Server locally.

Example:
```bash
yo thinkphp:serve
```

And you'll get a php server running at 127.0.0.1:3000.

## About

Add command line tools for ThinkPHP. Just like [Laravel](http://laravel.com)'s `php artisan`

## License

MIT
