from setuptools import setup

setup(
    name='media',
    packages=['media'],
    include_package_data=True,
    install_requires=[
        'flask',
        'hashids',
    ]
)
